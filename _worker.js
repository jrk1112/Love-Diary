export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. 静态页面请求：直接返回网页
    if (!url.pathname.startsWith("/dav/")) {
      return env.ASSETS.fetch(request);
    }

    // 2. 跨域预检请求处理
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    // 3. 代理坚果云 WebDAV 请求
    try {
      const davPath = url.pathname.replace("/dav/", "");
      const targetUrl = new URL(davPath + url.search, "https://dav.jianguoyun.com/dav/");

      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });

      const newHeaders = new Headers(response.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders
      });
    } catch (err) {
      console.error("代理请求失败:", err);
      return new Response("代理请求失败", { status: 500 });
    }
  }
};
