import { IconBinaryTree } from '@tabler/icons-react';
import { ComponentType } from '../types';

const chev = (cls = '') =>
  `<svg class="h-4 w-4 flex-none text-gray-400 transition-transform group-open:rotate-90 ${cls}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>`;

const folder = `<svg class="h-4.5 w-4.5 flex-none text-lime-600 dark:text-lime-300" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6a2 2 0 012-2h4.17a2 2 0 011.42.59L12 6h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" /></svg>`;

const file = `<svg class="h-4.5 w-4.5 flex-none text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z M14 3v5h5" /></svg>`;

const spacer = `<span class="h-4 w-4 flex-none"></span>`;

const sum = 'group flex cursor-pointer list-none items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-gray-800 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden';
const leaf = 'flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800';
const kids = 'ml-[1.125rem] mt-0.5 space-y-0.5 border-l border-gray-200 pl-2 dark:border-gray-700';

// Folder node (native <details> so it works without JS)
const dir = (name: string, children: string, open = false) => `<li>
  <details${open ? ' open' : ''} class="group">
    <summary class="${sum}">${chev()}${folder}<span>${name}</span></summary>
    <ul class="${kids}">${children}</ul>
  </details>
</li>`;

const doc = (name: string) => `<li><div class="${leaf}">${spacer}${file}<span>${name}</span></div></li>`;

// Selectable leaf / folder (marks data-active, clears siblings in same tree)
const pick = `var t=this.closest('[data-tree]');t.querySelectorAll('[data-active]').forEach(function(e){e.removeAttribute('data-active')});this.setAttribute('data-active','')`;
const activeCls = 'data-[active]:bg-lime-100 data-[active]:text-lime-800 dark:data-[active]:bg-lime-300/10 dark:data-[active]:text-lime-300';

const selDoc = (name: string) => `<li><button type="button" onclick="${pick}" class="${leaf} w-full text-left ${activeCls}">${spacer}${file}<span>${name}</span></button></li>`;

const selDir = (name: string, children: string, open = false) => `<li>
  <details${open ? ' open' : ''} class="group">
    <summary onclick="${pick}" class="${sum} ${activeCls}">${chev()}${folder}<span>${name}</span></summary>
    <ul class="${kids}">${children}</ul>
  </details>
</li>`;

// Checkbox tree: toggle via chevron button, cascade checked state, indeterminate on partial selection
const cascade = `var t=this.closest('[data-tree]'),li=this.closest('li');li.querySelectorAll('input[type=checkbox]').forEach(function(c){c.checked=this.checked;c.indeterminate=false}.bind(this));t.querySelectorAll('li').forEach(function(l){var own=l.querySelector(':scope > div > input'),lv=l.querySelectorAll('ul input[data-leaf]');if(!own||!lv.length)return;var n=Array.from(lv).filter(function(c){return c.checked}).length;own.checked=n===lv.length;own.indeterminate=n>0&&n<lv.length});var all=t.querySelectorAll('input[data-leaf]'),k=Array.from(all).filter(function(c){return c.checked}).length;t.querySelector('[data-count]').textContent=k+' of '+all.length+' selected'`;
const toggle = `var e=this.getAttribute('aria-expanded')!=='true';this.setAttribute('aria-expanded',e);this.closest('li').querySelector(':scope > ul').classList.toggle('hidden',!e)`;
const cbCls = 'h-4 w-4 flex-none cursor-pointer rounded border-gray-300 accent-lime-600 dark:border-gray-600 dark:accent-lime-300';

const cbLeaf = (id: string, name: string, checked = false) => `<li><div class="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800">
  <span class="h-4 w-4 flex-none"></span>
  <input id="${id}" data-leaf type="checkbox"${checked ? ' checked' : ''} onchange="${cascade}" class="${cbCls}" />
  <label for="${id}" class="flex-1 cursor-pointer text-sm text-gray-700 dark:text-gray-300">${name}</label>
</div></li>`;

const cbDir = (id: string, name: string, children: string, open = true) => `<li>
  <div class="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800">
    <button type="button" aria-expanded="${open}" aria-label="Toggle ${name}" onclick="${toggle}" class="group flex-none rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"><svg class="h-4 w-4 transition-transform group-aria-expanded:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg></button>
    <input id="${id}" type="checkbox" onchange="${cascade}" class="${cbCls}" />
    <label for="${id}" class="flex-1 cursor-pointer text-sm font-medium text-gray-900 dark:text-white">${name}</label>
  </div>
  <ul class="${kids} ml-[0.9rem]${open ? '' : ' hidden'}">${children}</ul>
</li>`;

const wrap = 'w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900';

export const tree_views: ComponentType = {
  slug: 'tree-views',
  name: 'Tree Views',
  icon: <IconBinaryTree stroke={1.5} />,
  description: 'Hierarchical lists with expandable nodes, connector lines, selection, checkboxes, badges and avatars.',
  variants: [
    {
      id: 'tree-view-basic',
      name: 'Basic File Tree',
      code: `<div data-tree class="${wrap}">
  <ul class="space-y-0.5">
    ${dir('src', `
      ${dir('components', `${doc('Button.tsx')}${doc('Modal.tsx')}${doc('Tabs.tsx')}`, true)}
      ${dir('hooks', `${doc('useTheme.ts')}${doc('useToggle.ts')}`)}
      ${doc('index.ts')}
      ${doc('main.tsx')}`, true)}
    ${dir('public', `${doc('favicon.ico')}${doc('logo.svg')}`)}
    ${doc('package.json')}
    ${doc('README.md')}
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-connectors',
      name: 'Branch Connectors',
      code: `<div class="${wrap}">
  <ul class="text-sm">
    <li>
      <details open class="group">
        <summary class="${sum}">${chev()}${folder}<span>design-system</span></summary>
        <ul class="ml-[1.125rem] border-l border-gray-300 dark:border-gray-600">
          ${['tokens', 'primitives', 'patterns']
            .map(
              (n, i, a) => `<li class="relative pl-5 before:absolute before:left-0 before:top-4 before:h-px before:w-4 before:bg-gray-300 dark:before:bg-gray-600${i === a.length - 1 ? ' after:absolute after:left-[-1px] after:top-[1.0625rem] after:bottom-0 after:w-px after:bg-white dark:after:bg-gray-900' : ''}">
            <div class="${leaf}">${folder}<span class="font-medium text-gray-800 dark:text-gray-200">${n}</span><span class="ml-auto rounded-full bg-lime-100 px-2 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-300/10 dark:text-lime-300">${(i + 1) * 4}</span></div>
          </li>`
            )
            .join('')}
        </ul>
      </details>
    </li>
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-selectable',
      name: 'Selectable Tree',
      code: `<div data-tree class="${wrap}">
  <ul class="space-y-0.5">
    ${selDir('Documents', `
      ${selDir('Contracts', `${selDoc('nda-2026.pdf')}${selDoc('vendor-terms.pdf')}`, true)}
      ${selDir('Invoices', `${selDoc('inv-0142.pdf')}${selDoc('inv-0143.pdf')}`)}
      ${selDoc('overview.docx')}`, true)}
    ${selDir('Images', `${selDoc('banner.png')}${selDoc('team.jpg')}`)}
    ${selDoc('notes.txt')}
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-checkbox',
      name: 'Checkbox Tree',
      code: `<div data-tree class="${wrap}">
  <div class="mb-2 flex items-center justify-between px-2">
    <p class="text-sm font-semibold text-gray-900 dark:text-white">Permissions</p>
    <span data-count class="text-xs text-lime-700 dark:text-lime-300">0 of 6 selected</span>
  </div>
  <ul class="space-y-0.5">
    ${cbDir('tv-cb-projects', 'Projects', `${cbLeaf('tv-cb-p1', 'View projects')}${cbLeaf('tv-cb-p2', 'Edit projects')}${cbLeaf('tv-cb-p3', 'Delete projects')}`)}
    ${cbDir('tv-cb-billing', 'Billing', `${cbLeaf('tv-cb-b1', 'View invoices')}${cbLeaf('tv-cb-b2', 'Manage payment methods')}${cbLeaf('tv-cb-b3', 'Change plan')}`, false)}
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-expand-controls',
      name: 'Expand / Collapse All',
      code: `<div data-tree class="${wrap}">
  <div class="mb-2 flex items-center justify-between border-b border-gray-200 px-2 pb-2 dark:border-gray-700">
    <p class="text-sm font-semibold text-gray-900 dark:text-white">Workspace</p>
    <div class="flex gap-3 text-xs font-semibold">
      <button type="button" onclick="this.closest('[data-tree]').querySelectorAll('details').forEach(function(d){d.open=true})" class="text-lime-700 hover:underline dark:text-lime-300">Expand all</button>
      <button type="button" onclick="this.closest('[data-tree]').querySelectorAll('details').forEach(function(d){d.open=false})" class="text-gray-500 hover:underline dark:text-gray-400">Collapse all</button>
    </div>
  </div>
  <ul class="space-y-0.5">
    ${dir('Marketing', `
      ${dir('Campaigns', `${doc('spring-launch.md')}${doc('black-friday.md')}`)}
      ${dir('Assets', `${doc('logo-pack.zip')}${doc('brand-guide.pdf')}`)}`)}
    ${dir('Engineering', `
      ${dir('Backend', `${doc('api-spec.yaml')}${doc('schema.sql')}`)}
      ${dir('Frontend', `${doc('design-tokens.json')}${doc('storybook.md')}`)}`)}
    ${dir('Finance', `${doc('budget-2027.xlsx')}${doc('forecast.xlsx')}`)}
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-org-chart',
      name: 'Team Hierarchy',
      code: `<div class="${wrap}">
  <ul class="space-y-0.5">
    ${[
      ['Amelia Chen', 'AC', 'VP Engineering', 'bg-lime-600 dark:bg-lime-300 dark:text-gray-900', 'bg-lime-500', [
        ['Daniel Ortiz', 'DO', 'Platform Lead', 'bg-gray-700 dark:bg-gray-500', 'bg-lime-500', ['Priya Nair|PN|Backend Engineer|bg-lime-500', 'Tom Becker|TB|SRE|bg-gray-400']],
        ['Sara Lindholm', 'SL', 'Design Lead', 'bg-gray-700 dark:bg-gray-500', 'bg-gray-400', ['Ken Mori|KM|Product Designer|bg-lime-500']],
      ]],
    ]
      .map(
        ([n, i, r, av, st, ch]: any) => `<li>
      <details open class="group">
        <summary class="${sum}">${chev()}<span class="relative flex h-8 w-8 flex-none items-center justify-center rounded-full text-xs font-semibold text-white ${av}">${i}<span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-900 ${st}"></span></span><span class="flex flex-col leading-tight"><span>${n}</span><span class="text-xs font-normal text-gray-500 dark:text-gray-400">${r}</span></span></summary>
        <ul class="${kids}">
          ${ch
            .map(
              ([n2, i2, r2, av2, st2, ch2]: any) => `<li>
            <details open class="group">
              <summary class="${sum}">${chev()}<span class="relative flex h-8 w-8 flex-none items-center justify-center rounded-full text-xs font-semibold text-white ${av2}">${i2}<span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-900 ${st2}"></span></span><span class="flex flex-col leading-tight"><span>${n2}</span><span class="text-xs font-normal text-gray-500 dark:text-gray-400">${r2}</span></span></summary>
              <ul class="${kids}">
                ${ch2
                  .map((s: string) => {
                    const [n3, i3, r3, st3] = s.split('|');
                    return `<li><div class="${leaf} gap-2.5">${spacer}<span class="relative flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">${i3}<span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-900 ${st3}"></span></span><span class="flex flex-col leading-tight"><span class="font-medium text-gray-800 dark:text-gray-200">${n3}</span><span class="text-xs text-gray-500 dark:text-gray-400">${r3}</span></span></div></li>`;
                  })
                  .join('')}
              </ul>
            </details>
          </li>`
            )
            .join('')}
        </ul>
      </details>
    </li>`
      )
      .join('')}
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'tree-view-nav-badges',
      name: 'Navigation with Badges',
      code: `<nav data-tree class="${wrap}" aria-label="Mailbox">
  <ul class="space-y-0.5">
    ${[
      ['Inbox', 12, [['Primary', 8], ['Social', 3], ['Updates', 1]], true],
      ['Projects', 4, [['Atlas', 2], ['Helix', 2]], false],
      ['Archive', 0, [], false],
    ]
      .map(([n, c, sub, open]: any) => {
        const badge = (v: number) => (v ? `<span class="ml-auto rounded-full bg-lime-100 px-2 py-0.5 text-xs font-semibold text-lime-800 dark:bg-lime-300/10 dark:text-lime-300">${v}</span>` : '');
        if (!sub.length) return `<li><button type="button" onclick="${pick}" class="${leaf} w-full text-left font-medium text-gray-800 dark:text-gray-200 ${activeCls}">${spacer}<span>${n}</span>${badge(c)}</button></li>`;
        return `<li>
      <details${open ? ' open' : ''} class="group">
        <summary class="${sum}">${chev()}<span>${n}</span>${badge(c)}</summary>
        <ul class="${kids}">
          ${sub.map(([sn, sc]: any) => `<li><button type="button" onclick="${pick}" class="${leaf} w-full text-left ${activeCls}"><span>${sn}</span>${badge(sc)}</button></li>`).join('')}
        </ul>
      </details>
    </li>`;
      })
      .join('')}
  </ul>
</nav>`,
      contributor: 'rayasabari',
    },
  ],
};
