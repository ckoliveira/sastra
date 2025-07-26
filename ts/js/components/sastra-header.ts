import { getHTMLElement } from "../html.ts";

const SastraHeader = () => /* HTML */ `
  <header class="sastra-header">
    <span></span>
    <section class="sastra-header-menu">
      <button onclick="(function(){location.href='home'})()">Home</button>

      <button onclick="(function(){location.href='blog?'})()">Blog Mode</button>

      <button onclick="(function(){location.href='theme-configuration'})()">
        Theme Configuration
      </button>

      <button>Archives</button>
    </section>
  </header>
`;

export function placeSastraHeader(): void {
  console.log("aquiuuu");
  document.body.insertAdjacentHTML("beforebegin", SastraHeader());
}
