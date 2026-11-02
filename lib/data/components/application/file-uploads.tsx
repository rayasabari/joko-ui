import { IconCloudUpload } from '@tabler/icons-react';
import { ComponentType } from '../types';

// Human-readable file size for a File object `f` (used inside inline handlers)
const size = `(f.size>1048576?(f.size/1048576).toFixed(1)+' MB':Math.max(1,Math.round(f.size/1024))+' KB')`;

// Drag & drop handlers for a <label> wrapping a hidden file input; toggles data-drag for styling
const dnd = `ondragover="event.preventDefault();this.dataset.drag='true'" ondragleave="this.dataset.drag='false'" ondrop="event.preventDefault();this.dataset.drag='false';var i=this.querySelector('input');i.files=event.dataTransfer.files;i.dispatchEvent(new Event('change'))"`;

const cloudIcon = `<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>`;

const fileIcon = `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`;

const closeIcon = `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;

export const file_uploads: ComponentType = {
  slug: 'file-uploads',
  name: 'File Uploads',
  icon: <IconCloudUpload stroke={1.5} />,
  description: 'File inputs and drag & drop zones with previews, progress states, avatars, galleries and attachments.',
  variants: [
    {
      id: 'file-upload-dropzone',
      name: 'Dropzone',
      code: `<div class="w-full max-w-lg">
  <label for="fu-dropzone" ${dnd}
    class="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-lime-600 hover:bg-lime-50 data-[drag=true]:border-lime-600 data-[drag=true]:bg-lime-50 dark:border-gray-600 dark:bg-gray-800/50 dark:hover:border-lime-300 dark:hover:bg-lime-300/5 dark:data-[drag=true]:border-lime-300 dark:data-[drag=true]:bg-lime-300/5">
    <span class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-700 dark:bg-lime-300/10 dark:text-lime-300">${cloudIcon}</span>
    <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-semibold text-lime-700 dark:text-lime-300">Click to upload</span> or drag and drop</p>
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (max. 5MB)</p>
    <p data-name class="mt-4 hidden rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-white dark:ring-gray-700"></p>
    <input id="fu-dropzone" type="file" multiple class="sr-only"
      onchange="var n=this.parentNode.querySelector('[data-name]');n.textContent=this.files.length===1?this.files[0].name:this.files.length+' files selected';n.classList.toggle('hidden',!this.files.length)" />
  </label>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-basic-input',
      name: 'Basic Input',
      code: `<div class="w-full max-w-md space-y-6">
  <div>
    <label for="fu-basic" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
    <input id="fu-basic" type="file"
      class="block w-full cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-600/40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-lime-300/30 file:mr-4 file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-gray-300 file:bg-gray-100 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200 dark:file:border-gray-600 dark:file:bg-gray-700 dark:file:text-gray-200 dark:hover:file:bg-gray-600" />
    <p class="mt-1.5 text-xs text-gray-500 dark:text-gray-400">PDF or DOCX, up to 10MB.</p>
  </div>
  <div>
    <label for="fu-basic-pill" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Cover image</label>
    <input id="fu-basic-pill" type="file" accept="image/*"
      class="block w-full cursor-pointer text-sm text-gray-500 focus:outline-none dark:text-gray-400 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-lime-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:transition hover:file:bg-lime-700 dark:file:bg-lime-300 dark:file:text-gray-900 dark:hover:file:bg-lime-400" />
  </div>
  <div>
    <label for="fu-basic-disabled" class="mb-2 block text-sm font-medium text-gray-400 dark:text-gray-500">Disabled</label>
    <input id="fu-basic-disabled" type="file" disabled
      class="block w-full cursor-not-allowed overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-400 opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 file:mr-4 file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-100 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-gray-400 dark:file:border-gray-700 dark:file:bg-gray-700 dark:file:text-gray-500" />
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-avatar',
      name: 'Avatar Upload',
      code: `<div data-avatar class="flex w-full max-w-md items-center gap-5">
  <div class="relative flex-none">
    <div data-ph class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400 ring-4 ring-white dark:bg-gray-800 dark:text-gray-500 dark:ring-gray-900">
      <svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.76-3.58-5-8-5z" /></svg>
    </div>
    <img alt="Avatar preview" class="hidden h-20 w-20 rounded-full object-cover ring-4 ring-white dark:ring-gray-900" />
    <label for="fu-avatar" class="absolute -bottom-0.5 -right-0.5 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-lime-600 text-white shadow ring-2 ring-white transition hover:bg-lime-700 dark:bg-lime-300 dark:text-gray-900 dark:ring-gray-900 dark:hover:bg-lime-400" aria-label="Change photo">
      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    </label>
  </div>
  <div>
    <p class="text-sm font-semibold text-gray-900 dark:text-white">Profile photo</p>
    <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. 1MB max.</p>
    <div class="mt-3 flex gap-2">
      <label for="fu-avatar" class="cursor-pointer rounded-lg bg-lime-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-lime-700 dark:bg-lime-300 dark:text-gray-900 dark:hover:bg-lime-400">Upload photo</label>
      <button type="button"
        onclick="var r=this.closest('[data-avatar]');r.querySelector('img').classList.add('hidden');r.querySelector('[data-ph]').classList.remove('hidden');r.querySelector('input').value=''"
        class="rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">Remove</button>
    </div>
    <input id="fu-avatar" type="file" accept="image/*" class="sr-only"
      onchange="var f=this.files[0];if(!f)return;var r=this.closest('[data-avatar]'),img=r.querySelector('img');img.src=URL.createObjectURL(f);img.classList.remove('hidden');r.querySelector('[data-ph]').classList.add('hidden')" />
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-progress-list',
      name: 'Upload Progress List',
      code: `<div class="w-full max-w-lg space-y-4">
  <label for="fu-progress" ${dnd}
    class="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 px-5 py-4 transition hover:border-lime-600 data-[drag=true]:border-lime-600 data-[drag=true]:bg-lime-50 dark:border-gray-600 dark:hover:border-lime-300 dark:data-[drag=true]:border-lime-300 dark:data-[drag=true]:bg-lime-300/5">
    <span class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-lime-100 text-lime-700 dark:bg-lime-300/10 dark:text-lime-300">${cloudIcon}</span>
    <span class="text-sm text-gray-600 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Drop files here</span> or <span class="font-semibold text-lime-700 underline-offset-2 hover:underline dark:text-lime-300">browse</span></span>
    <input id="fu-progress" type="file" multiple class="sr-only"
      onchange="var ul=this.closest('.max-w-lg').querySelector('ul'),t=ul.querySelector('template');Array.from(this.files).forEach(function(f){var li=t.content.firstElementChild.cloneNode(true);li.querySelector('[data-name]').textContent=f.name;li.querySelector('[data-size]').textContent=${size};ul.prepend(li);var bar=li.querySelector('[data-bar]'),pct=li.querySelector('[data-pct]'),p=0,iv=setInterval(function(){p=Math.min(100,p+Math.random()*18);bar.style.width=p+'%';pct.textContent=Math.round(p)+'%';if(p>=100){clearInterval(iv);pct.textContent='Done'}},200)});this.value=''" />
  </label>
  <ul class="space-y-3">
    <template>
      <li class="rounded-xl border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex items-center gap-3">
          <span class="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">${fileIcon}</span>
          <div class="min-w-0 flex-1">
            <p data-name class="truncate text-sm font-medium text-gray-900 dark:text-white"></p>
            <p class="text-xs text-gray-500 dark:text-gray-400"><span data-size></span> · <span data-pct class="text-lime-700 dark:text-lime-300">0%</span></p>
          </div>
          <button type="button" onclick="this.closest('li').remove()" class="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-label="Remove">${closeIcon}</button>
        </div>
        <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"><div data-bar class="h-full w-0 rounded-full bg-lime-600 transition-[width] dark:bg-lime-300"></div></div>
      </li>
    </template>
    <li class="rounded-xl border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900">
      <div class="flex items-center gap-3">
        <span class="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">${fileIcon}</span>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-gray-900 dark:text-white">quarterly-report.pdf</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">2.4 MB · <span class="text-lime-700 dark:text-lime-300">64%</span></p>
        </div>
        <button type="button" onclick="this.closest('li').remove()" class="rounded-md p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-label="Cancel upload">${closeIcon}</button>
      </div>
      <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"><div class="h-full w-[64%] rounded-full bg-lime-600 dark:bg-lime-300"></div></div>
    </li>
    <li class="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900">
      <span class="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-lime-100 text-lime-700 dark:bg-lime-300/10 dark:text-lime-300">${fileIcon}</span>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">brand-guidelines.fig</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">8.1 MB · Uploaded</p>
      </div>
      <svg class="h-5 w-5 flex-none text-lime-600 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
    </li>
    <li class="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 dark:border-red-500/30 dark:bg-red-500/10">
      <span class="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">${fileIcon}</span>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">raw-footage.mov</p>
        <p class="text-xs text-red-600 dark:text-red-400">File exceeds 50MB limit</p>
      </div>
      <button type="button" class="text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">Retry</button>
    </li>
  </ul>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-image-gallery',
      name: 'Image Gallery',
      code: `<div data-gallery class="w-full max-w-lg">
  <div class="mb-3 flex items-center justify-between">
    <p class="text-sm font-medium text-gray-900 dark:text-white">Product images</p>
    <p class="text-xs text-gray-500 dark:text-gray-400">Up to 8 images</p>
  </div>
  <template>
    <div class="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
      <img alt="" class="h-full w-full object-cover" />
      <button type="button" onclick="this.parentNode.remove()" class="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/70 text-white opacity-0 transition group-hover:opacity-100" aria-label="Remove image">${closeIcon}</button>
    </div>
  </template>
  <div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
    <div class="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-lime-100 text-lime-600 dark:bg-lime-300/10 dark:text-lime-300">
      <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      <span class="absolute bottom-1.5 left-1.5 rounded-md bg-gray-900/70 px-1.5 py-0.5 text-[10px] font-semibold text-white">Cover</span>
      <button type="button" onclick="this.parentNode.remove()" class="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/70 text-white opacity-0 transition group-hover:opacity-100" aria-label="Remove image">${closeIcon}</button>
    </div>
    <div class="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
      <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      <button type="button" onclick="this.parentNode.remove()" class="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/70 text-white opacity-0 transition group-hover:opacity-100" aria-label="Remove image">${closeIcon}</button>
    </div>
    <label for="fu-gallery" ${dnd}
      class="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-gray-300 text-gray-500 transition hover:border-lime-600 hover:text-lime-700 data-[drag=true]:border-lime-600 data-[drag=true]:bg-lime-50 dark:border-gray-600 dark:text-gray-400 dark:hover:border-lime-300 dark:hover:text-lime-300 dark:data-[drag=true]:border-lime-300 dark:data-[drag=true]:bg-lime-300/5">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
      <span class="text-xs font-semibold">Add image</span>
      <input id="fu-gallery" type="file" accept="image/*" multiple class="sr-only"
        onchange="var g=this.closest('[data-gallery]'),t=g.querySelector('template'),add=this.closest('label');Array.from(this.files).forEach(function(f){var tile=t.content.firstElementChild.cloneNode(true);var img=tile.querySelector('img');img.src=URL.createObjectURL(f);img.alt=f.name;add.before(tile)});this.value=''" />
    </label>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-attachments',
      name: 'Attachment Chips',
      code: `<div data-attach class="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-sm focus-within:border-lime-600 focus-within:ring-2 focus-within:ring-lime-600/20 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-lime-300 dark:focus-within:ring-lime-300/20">
  <textarea rows="3" placeholder="Write a message..." class="block w-full resize-none rounded-t-2xl bg-transparent px-4 pt-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500"></textarea>
  <template>
    <span class="inline-flex max-w-[12rem] items-center gap-1.5 rounded-lg bg-lime-100 py-1 pl-2 pr-1 text-xs font-medium text-lime-800 dark:bg-lime-300/10 dark:text-lime-300">
      <svg class="h-3.5 w-3.5 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <span data-name class="truncate"></span>
      <span data-size class="flex-none opacity-70"></span>
      <button type="button" onclick="this.parentNode.remove()" class="flex-none rounded p-0.5 transition hover:bg-lime-200 dark:hover:bg-lime-300/20" aria-label="Remove attachment"><svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
    </span>
  </template>
  <div data-chips class="flex flex-wrap gap-2 px-4 pt-2 empty:hidden"></div>
  <div class="flex items-center justify-between px-3 py-2.5">
    <label for="fu-attach" class="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      Attach files
      <input id="fu-attach" type="file" multiple class="sr-only"
        onchange="var w=this.closest('[data-attach]'),t=w.querySelector('template'),c=w.querySelector('[data-chips]');Array.from(this.files).forEach(function(f){var chip=t.content.firstElementChild.cloneNode(true);chip.querySelector('[data-name]').textContent=f.name;chip.querySelector('[data-size]').textContent=${size};c.append(chip)});this.value=''" />
    </label>
    <button type="button" class="rounded-lg bg-lime-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-lime-700 dark:bg-lime-300 dark:text-gray-900 dark:hover:bg-lime-400">Send</button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
    {
      id: 'file-upload-single-file-card',
      name: 'Single File Card',
      code: `<div data-single class="w-full max-w-md">
  <p class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume / CV</p>
  <label data-empty for="fu-single" ${dnd}
    class="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition hover:border-lime-600 data-[drag=true]:border-lime-600 data-[drag=true]:bg-lime-50 dark:border-gray-600 dark:bg-gray-900 dark:hover:border-lime-300 dark:data-[drag=true]:border-lime-300 dark:data-[drag=true]:bg-lime-300/5">
    <span class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">${cloudIcon}</span>
    <span class="flex-1">
      <span class="block text-sm font-semibold text-gray-900 dark:text-white">Upload your resume</span>
      <span class="block text-xs text-gray-500 dark:text-gray-400">PDF only, max 2MB</span>
    </span>
    <span class="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-200">Browse</span>
    <input id="fu-single" type="file" accept=".pdf" class="sr-only"
      onchange="var f=this.files[0];if(!f)return;var w=this.closest('[data-single]'),card=w.querySelector('[data-file]');card.querySelector('[data-name]').textContent=f.name;card.querySelector('[data-size]').textContent=${size};card.classList.replace('hidden','flex');w.querySelector('[data-empty]').classList.add('hidden')" />
  </label>
  <div data-file class="hidden items-center gap-4 rounded-xl border border-lime-600 bg-lime-50 p-4 dark:border-lime-300/60 dark:bg-lime-300/5">
    <span class="relative flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-red-500 text-[10px] font-bold text-white">PDF</span>
    <div class="min-w-0 flex-1">
      <p data-name class="truncate text-sm font-semibold text-gray-900 dark:text-white"></p>
      <p class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"><span data-size></span> · <span class="inline-flex items-center gap-0.5 font-medium text-lime-700 dark:text-lime-300"><svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Ready</span></p>
    </div>
    <label for="fu-single" class="cursor-pointer text-xs font-semibold text-lime-700 hover:underline dark:text-lime-300">Replace</label>
    <button type="button"
      onclick="var w=this.closest('[data-single]');w.querySelector('[data-file]').classList.replace('flex','hidden');w.querySelector('[data-empty]').classList.remove('hidden');w.querySelector('input').value=''"
      class="rounded-md p-1 text-gray-400 transition hover:bg-white hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300" aria-label="Remove file">${closeIcon}</button>
  </div>
</div>`,
      contributor: 'rayasabari',
    },
  ],
};
