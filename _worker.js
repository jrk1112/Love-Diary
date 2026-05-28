export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 跨域预检
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }

    try {
      // 转发到坚果云
      const targetUrl = new URL(
        url.pathname + url.search,
        "https://dav.jianguoyun.com"
      );

      const res = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });

      const newHeaders = new Headers(res.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");

      return new Response(res.body, {
        status: res.status,
        headers: newHeaders
      });
    } catch (err) {
      // 出错时正常访问网页
      return env.ASSETS.fetch(request);
    }
  }
};