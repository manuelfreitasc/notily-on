import { useState, useEffect, useRef } from 'react'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FontBoldIcon, FontItalicIcon, StrikethroughIcon } from '@radix-ui/react-icons'
import Youtube from '@tiptap/extension-youtube'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

import { lowlight } from 'lowlight'
import { Link, YoutubeIcon } from 'lucide-react'
import { JSX } from 'react/jsx-runtime'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

interface EditorProps {
  // Propriedades do componente Editor
  // Aqui você pode listar todas as props que o componente Editor pode receber

  // Exemplo de propriedades:
  id: number
  content: string
  title?: string
  activeId: number | null
  onUpdateContent: (id: number, content: string) => void
  onUpdateTitle?: (id: number, title: string) => void
  onDelete?: (id: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Editor({
  id,
  content,
  activeId,
  onUpdateContent
}: EditorProps): JSX.Element {
  /*   const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onUpdateContent(id, editor.getHTML());
    },
  }); */

  const editor = useEditor({
    injectCSS: true,
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight
      }),
      Youtube.configure({
        controls: true
      })
    ],
    editable: true,
    content: content,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    },
    onUpdate: ({ editor }) => {
      onUpdateContent(id, editor.getHTML())
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const widthRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const heightRef = useRef<any>(null)
  const [URL, setURL] = useState('')

  useEffect(() => {
    if (widthRef.current && heightRef.current) {
      widthRef.current.value = 640
      heightRef.current.value = 480
    }
  }, [widthRef.current, heightRef.current])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const addYoutubeVideo = (e) => {
    e.preventDefault()

    if (URL) {
      editor!.commands.setYoutubeVideo({
        src: URL,
        width: Math.max(320, parseInt(widthRef.current.value, 10)) || 640,
        height: Math.max(180, parseInt(heightRef.current.value, 10)) || 480
      })
    }
  }

  /*  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(title)

  const handleUpdateTitle = () => {
    onUpdateTitle(id, updatedTitle)
    setIsEditingTitle(false)
  } */

  return (
    <div
      /*    style={{
        marginBottom: "20px",
        display: activeId === id ? "block" : "none",
      }} */
      data-visibility={activeId === id}
      className="hidden data-[visibility=true]:block transition-all "
    >
      {/*       {isEditingTitle ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            onBlur={handleUpdateTitle}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateTitle();
              }
            }}
          />
        </div>
      ) : (
        <h1 onClick={() => setIsEditingTitle(true)}>{title}</h1>
      )} */}
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className=" dark:text-zinc-100 rounded-sm overflow-hidden"
        >
          <div className="divide-x-2 font-bold flex items-center  dark:divide-zinc-200/5 dark:bg-zinc-800">
            <button
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={
                'p-1 flex items-center justify-center w-10  data-[active=true]:bg-zinc-700 data-[active=true]:text-cyan-400'
              }
              data-active={editor.isActive('bold')}
            >
              <FontBoldIcon className="" />
            </button>
            <button
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={
                'p-1 flex items-center justify-center w-10 data-[active=true]:bg-zinc-700 data-[active=true]:text-cyan-400'
              }
              data-active={editor.isActive('italic')}
            >
              <FontItalicIcon className="" />
            </button>
            <button
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={
                'p-1 flex items-center justify-center w-10  data-[active=true]:bg-zinc-700 data-[active=true]:text-cyan-400'
              }
              data-active={editor.isActive('strike')}
            >
              <StrikethroughIcon />
            </button>
          </div>
        </BubbleMenu>
      )}

      {editor && (
        <>
          <FloatingMenu
            editor={editor}
            tippyOptions={{ animation: true, moveTransition: '23' }}
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            shouldShow={({ state }) => {
              const { $from } = state.selection
              const currentStete = $from.nodeBefore?.textContent

              return currentStete === '.'
            }}
            className=" dark:text-zinc-100  rounded overflow-hidden min-w-[200px] dark:bg-zinc-800 relative"
          >
            <div className="divide-y-2 dark:divide-zinc-200/5 p-2 ">
              <button className="group font-bold flex-col divide-y-2 flex items-center gap-3 px-1 py-1 w-full  rounded-md transition  dark:hover:bg-zinc-700">
                <div className="flex items-center gap-3 px-1  w-full ">
                  <YoutubeIcon className="w-14 h-14 fill-red-700 border-red-500" />
                  <div className="flex flex-col text-left gap-1">
                    <strong className="text-sm dark:text-zinc-200 font-normal">YouTube</strong>
                    <span className="text-xs dark:text-zinc-400 font-normal">
                      Add YouTube video
                    </span>
                  </div>
                </div>

                <form
                  action=""
                  className="hidden group-focus-within:block py-2dark:text-zinc-300 divide-y-2  rounded overflow-hidden min-w-[200px] dark:bg-zinc-800 "
                >
                  <div className=" flex flex-col gap-2 dark:divide-zinc-200/5 p-2">
                    <input
                      id="width"
                      type="url"
                      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                      onChange={(e) => setURL(e.target.value)}
                      placeholder="Type a Youtub video url"
                      className=" flex items-center  dark:text-zinc-400 font-normal outline-none border text-sm border-zinc-500 placeholder:text-sm placeholder:font-normal h-7 gap-3 px-1  w-full  rounded transition  bg-transparent dark:hover:bg-zinc-700"
                    />

                    <div className="flex items-center gap-2 ">
                      <label htmlFor="" className="text-left w-full">
                        <span className=" text-sm font-normal text-zinc-400">Width</span>
                        <input
                          id="width"
                          type="number"
                          min="320"
                          max="1024"
                          ref={widthRef}
                          placeholder="Video width"
                          className=" flex items-center  dark:text-zinc-400 font-normal outline-none border-2 text-sm border-zinc-700 placeholder:text-sm placeholder:font-normal h-7 gap-3 px-1  w-full  rounded transition  bg-transparent bg-zinc-700"
                        />
                      </label>
                      <label htmlFor="" className="text-left w-full">
                        <span className=" text-sm font-normal text-zinc-400">Height</span>
                        <input
                          id="height"
                          type="number"
                          min="180"
                          max="720"
                          ref={heightRef}
                          placeholder="Video height"
                          className=" flex items-center  dark:text-zinc-400 font-normal outline-none border-2 text-sm border-zinc-700 placeholder:text-sm placeholder:font-normal h-7 gap-3 px-1  w-full  rounded transition   bg-zinc-700"
                        />
                      </label>
                    </div>
                    <a
                      onClick={addYoutubeVideo}
                      className=" flex items-center font-bold  hover:bg-red-800/60 justify-center  dark:text-zinc-100  outline-none border-2  text-sm border-zinc-700 placeholder:text-sm placeholder:font-normal mt-3 h-9 gap-3 px-1  w-full  rounded transition   bg-red-800"
                    >
                      <Link size={14} className="text-xs" /> Add
                    </a>
                  </div>
                </form>
              </button>
            </div>

            {/* <button id="add" onClick={addYoutubeVideo}>Add YouTube video</button>
            <input id="width" type="number" min="320" max="1024" ref={widthRef} placeholder="width" />
            <input id="height" type="number" min="180" max="720" ref={heightRef} placeholder="height" /> */}
          </FloatingMenu>
        </>
      )}
      {activeId === id && (
        <EditorContent
          editor={editor}
          className="max-w-[100%] prose prose-headings:text-zinc-100 prose-code:text-cyan-500  prose-p:text-zinc-400"
        />
      )}
    </div>
  )
}
