<script lang="ts">
  interface DescriptionListItem {
    svg: string
    title: string
    description: string
    href?: string
  }

  const descriptions: DescriptionListItem[] = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M80-80v-320l160-71v-129l200-100v-60h-80v-80h80v-80h80v80h80v80h-80v60l200 100v129l160 71v320H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H80Zm80-80h200v-82q0-51 35-86.5t85-35.5q50 0 85 35.5t35 86.5v82h200v-192l-160-72v-134l-160-82-160 82v134l-160 72v192Zm320-260q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm0 20Z"/></svg>`,
      title: `会場`,
      description: `THE SEASON'S`
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>`,
      title: `住所`,
      description: `神奈川県横浜市西区西平沼町6-1`,
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>`,
      title: `会場HP`,
      description: `https://www.tgn.co.jp/wedding/yokohama/ssy/`,
      href: `https://www.tgn.co.jp/wedding/yokohama/ssy/`
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>`,
      title: `電話番号`,
      description: `045-410-4122`,
      href: `tel:0454104122`
    },
  ]
</script>

<section>
  <ul>
    {#each descriptions as { svg, title, description, href }}
      <li class="flex items-center mb-4">
        <div class="flex items-center w-[120px] shrink-0">
          {@html svg}
          <p class="ml-2">
            {title}
          </p>
        </div>
        <p class="w-[calc(100%_-_120px)]">
          {#if href}
            <a href={href} target="_blank" class="break-words whitespace-normal hover:">
              {description}
            </a>
          {:else}
            {description}
          {/if}
        </p>
      </li>
    {/each}
  </ul>
</section>