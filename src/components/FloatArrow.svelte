<script>
    let { link = "/", text = "Back" } = $props();
</script>

<a href={link}>
    <div class="arrow-container">
        &#8656; {text}
    </div>
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
    }

    .arrow-container {
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 999;

        padding: 11px 22px;
        min-width: 104px;

        display: flex;
        align-items: center;
        justify-content: center;

        background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.08)),
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.35), transparent 55%),
            rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.45),
            inset 0 -1px 0 rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(16px) saturate(160%);
        -webkit-backdrop-filter: blur(16px) saturate(160%);
        border: 1px solid rgba(255, 255, 255, 0.28);
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease,
            border-color 180ms ease;
        overflow: hidden;
        isolation: isolate;
    }

    .arrow-container::before {
        content: "";
        position: absolute;
        inset: -40% -18%;
        background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.55), transparent 45%);
        opacity: 0.7;
        transform: translateY(12px) scale(0.9);
        transition: transform 180ms ease, opacity 180ms ease;
        pointer-events: none;
        z-index: -1;
    }

    .arrow-container:hover {
        cursor: pointer;
        transform: translateY(-2px) scale(1.03);
        box-shadow:
            0 16px 36px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.55),
            inset 0 -1px 0 rgba(255, 255, 255, 0.16);
        border-color: rgba(255, 255, 255, 0.45);
    }

    .arrow-container:hover::before {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    a:focus-visible .arrow-container {
        outline: 2px solid rgba(255, 255, 255, 0.9);
        outline-offset: 3px;
    }
</style>
