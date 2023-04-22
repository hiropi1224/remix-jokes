import { LiveReload, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        {/* LiveReloadコンポーネントは変更を加えるたびにブラウザーを自動更新するための開発中に役立つ */}
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
