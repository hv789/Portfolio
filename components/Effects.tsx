"use client";

// All page motion in one place: Lenis smooth scroll, letter/ block reveals,
// hero parallax, magnetic buttons, card tilt + glow, count-up stats,
// scroll progress, nav border and copy-to-clipboard. Everything respects
// prefers-reduced-motion (content is shown immediately instead).
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("no-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // ---- reveals (headings split into letters, blocks fade up) ----
    const targets = document.querySelectorAll<HTMLElement>("[data-split], [data-reveal]");
    if (reduce) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
            const idx = Math.min(Math.max(siblings.indexOf(el), 0), 5);
            window.setTimeout(() => el.classList.add("is-in"), el.hasAttribute("data-reveal") ? idx * 80 : 0);
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -12% 0px" },
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // ---- count-up numbers ----
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const runCount = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      if (reduce) {
        el.textContent = target.toFixed(decimals);
        return;
      }
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          runCount(e.target as HTMLElement);
          cio.unobserve(e.target);
        }
      });
    });
    counters.forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    // ---- nav border + scroll progress ----
    const nav = document.querySelector<HTMLElement>(".nav");
    const bar = document.querySelector<HTMLElement>(".progress");
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.dataset.scrolled = y > 24 ? "true" : "false";
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.setProperty("--p", String(max > 0 ? y / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ---- copy to clipboard ----
    document.querySelectorAll<HTMLElement>("[data-copy]").forEach((el) => {
      const handler = async (ev: Event) => {
        ev.preventDefault();
        const text = el.dataset.copy || "";
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          window.location.href = `mailto:${text}`;
          return;
        }
        const action = el.querySelector<HTMLElement>("[data-copy-label]");
        if (action) {
          const prev = action.textContent;
          action.textContent = "Copied";
          window.setTimeout(() => (action.textContent = prev), 1600);
        }
      };
      el.addEventListener("click", handler);
      cleanups.push(() => el.removeEventListener("click", handler));
    });

    if (reduce) return () => cleanups.forEach((c) => c());

    // ---- magnetic buttons ----
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const strength = 14;
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
        const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      };
      const reset = () => (el.style.transform = "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", reset);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", reset);
      });
    });

    // ---- card tilt + cursor glow ----
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const max = 5;
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -max}deg) rotateY(${(px - 0.5) * max}deg)`;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
      };
      const reset = () => (el.style.transform = "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", reset);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", reset);
      });
    });

    // ---- Lenis smooth scroll + GSAP parallax (loaded lazily) ----
    let cancelled = false;
    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
      const onAnchor = (e: Event) => {
        const id = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (!id || id.length < 2) return;
        const target = document.querySelector<HTMLElement>(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72, duration: 1.2 });
      };
      anchors.forEach((a) => a.addEventListener("click", onAnchor));

      const tweens = [
        gsap.to("[data-parallax='title']", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 } }),
        gsap.to("[data-parallax='card']", { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } }),
      ];

      cleanups.push(() => {
        anchors.forEach((a) => a.removeEventListener("click", onAnchor));
        tweens.forEach((t) => t.scrollTrigger?.kill());
        gsap.ticker.remove(raf);
        lenis.destroy();
      });
    })();
    cleanups.push(() => {
      cancelled = true;
    });

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
