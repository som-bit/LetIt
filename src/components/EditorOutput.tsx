import dynamic from 'next/dynamic'
import { FC } from 'react'
import CustomCodeRenderer from '@/components/renderers/CustomCodeRenderer'
import CustomImageRenderer from '@/components/renderers/CustomImageRenderer'
import CustomTableRenderer from '@/components/renderers/CustomTableRenderer'


const Output = dynamic(async () => (await import('editorjs-react-renderer')).default, {
    ssr: false
})

interface EditorOutputProps {
    content: any
}

const style = {
    paragraph: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem'
    }
}

const renderers = {
    image: CustomImageRenderer,
    code: CustomCodeRenderer,
    table: CustomTableRenderer
}

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
    return (
        //@ts-expect-error
        <Output
            style={style}
            className='text-sm'
            renderers={renderers}
            data={content}
        />)
}






export default EditorOutput