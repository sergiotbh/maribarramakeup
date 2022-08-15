import React from 'react'

export const Title = ({children, customStyle}) => (
  <h1 className={`${customStyle} uppercase font-extrabold text-4xl xl:text-6xl leading-relaxed italic`}>{children}</h1>
)

export const SectionTitle = ({children, customStyle}) => (
  <h2 className={`${customStyle} font-extrabold text-3xl xl:text-5xl leading-relaxed italic`}>{children}</h2>
)

export const Subtitle = ({children, customStyle}) => (
  <h3 className={`${customStyle} font-light italic text-3xl xl:text-5xl leading-relaxed tracking-wide`}>{children}</h3>
)

export const SmallSubtitle = ({children, customStyle}) => (
  <h2 className={`${customStyle} font-extrabold text-xl xl:text-2xl leading-relaxed italic`}>{children}</h2>
)

export const Paragraph = ({children, customStyle}) => (
  <p className={`${customStyle} font-Roboto font-light text-base tracking-wider`}>{children}</p>
)

export const MenuItem = ({children, selected, customStyle}) => (
  <span className={`${customStyle || ''} font-Roboto font-normal hover:font-black hover:underline decoration-yellow underline-offset-4 decoration-2 text-xs leading-3 uppercase ${selected ? 'font-black' : 'font-normal'} cursor-pointer p-4`}>{children}</span>
)

export const TextField = ({label, name, value}) => (
  <div>
    <label>
      <input
        class="font-Roboto placeholder:text-slate-400 block bg-white w-full border border-borderGrey rounded-md px-3 py-2 pr-3 shadow-sm focus:outline-none focus:border-gray-200 focus:ring-gray-200 focus:ring-1 sm:text-sm mb-4"
        placeholder={label}
        type="text"
        name={name}
        value={value}
      />
    </label>
  </div>
)

export const TextArea = ({label, name, value}) => (
  <div>
    <label>
      <textarea
        class="font-Roboto placeholder:text-slate-400 block bg-white w-full border border-borderGrey rounded-md px-3 py-2 pr-3 shadow-sm focus:outline-none focus:border-gray-200 focus:ring-gray-200 focus:ring-1 sm:text-sm mb-4 resize-none"
        rows={10}
        placeholder={label}
        type="text"
        name={name}
        value={value}
      />
    </label>
  </div>
)