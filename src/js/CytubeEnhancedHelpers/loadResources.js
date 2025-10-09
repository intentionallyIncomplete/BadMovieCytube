/**
 * Load a CSS file if not already present.
 * @param {string} href
 * @param {{media?: string, rel?: string}} [options]
 * @returns {Promise<void>}
 */
export function loadCss(href, options = {}) {
    const { media = 'all', rel = 'stylesheet' } = options;
    const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`);
    if (existing) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        link.media = media;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
        document.head.appendChild(link);
    });
}

/**
 * Load a JS file if not already present.
 * @param {string} src
 * @param {{async?: boolean, defer?: boolean, attrs?: Record<string,string>}} [options]
 * @returns {Promise<void>}
 */
export function loadJs(src, options = {}) {
    const { async = false, defer = false, attrs = {} } = options;
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = !!async;
        script.defer = !!defer;
        Object.keys(attrs).forEach((k) => script.setAttribute(k, attrs[k]));
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load JS: ${src}`));
        document.body.appendChild(script);
    });
}

/**
 * Load a batch of resources.
 * @param {Array<{type: 'css', href: string, media?: string, rel?: string} | {type: 'js', src: string, async?: boolean, defer?: boolean, attrs?: Record<string,string>}>} resources
 * @returns {Promise<void>}
 */
export async function loadResources(resources) {
    const tasks = (resources || []).map((r) => {
        if (r && r.type === 'css' && r.href) {
            return loadCss(r.href, { media: r.media, rel: r.rel });
        }
        if (r && r.type === 'js' && r.src) {
            return loadJs(r.src, { async: r.async, defer: r.defer, attrs: r.attrs });
        }
        return Promise.resolve();
    });
    await Promise.all(tasks);
}


