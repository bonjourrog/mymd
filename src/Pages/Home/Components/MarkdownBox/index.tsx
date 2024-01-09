import './MarkdoenBox.css';
import { MarkdownBoxProps } from './MarkdownBox.props';

const MarkdownBox:React.FC<MarkdownBoxProps> = ({children, className})=>{
    return (
        <section className={className}>
            {children}
        </section>
    );
}
export default MarkdownBox;