const getSelelectedText = (pre, post,noSelectCollapse) => {
    const input = document.querySelector('#editor_content > textarea');
    const start = input.selectionStart, end = input.selectionEnd;
    if ( start === end && noSelectCollapse ) {
        input.focus();
        return;
    }
    const selected = input.value.slice(start, end);
    input.setRangeText(`${pre}${selected}${post}`);
    input.selectionStart += pre.length;
    input.selectionEnd -= post.length;
    localStorage.setItem('md',input.value);
    autoGrow();
    input.focus();
}

const autoGrow = () => {
    const input = document.querySelector('#editor_content > textarea');
    const prevHeight = input.scrollHeight;
    const editor = document.querySelector('#editor');
    const prevPos = editor.scrollTop;
    input.style.height = '5px';
    const scrollHeight = input.scrollHeight;
    input.style.height = (scrollHeight) + 'px';
    
    if( prevHeight===scrollHeight )
    editor.scrollTop = prevPos;
}

const selectEntireBlock = ()=>{
    const input = document.querySelector('#editor_content > textarea');
    let start = input.selectionStart, end = input.selectionEnd;
    const text = input.value;
    end = text.indexOf('\n',Math.max(0,end-1));
    end===-1 ? text.lenght : end;
    start = text.lastIndexOf('\n',Math.max(0,end-1));
    start === -1 ? 0 : start;

    input.selectionStart = start+1, input.selectionEnd = end;
}

const bold = () => getSelelectedText("**", "**",true);

const italic = () => getSelelectedText("_", "_",true);

const underline = () => getSelelectedText("<u>", "</u>",true);

const divider = () => getSelelectedText('\n', '--- \n\n',false);

const blockquote = () =>{
    selectEntireBlock();
    getSelelectedText('\n >','\n\n',false);
}

const tip = () => {

}

const note = () => {

}

const warning = () => {

}

const code = () => {

}

const photo = () => {

}

const link = () => {

}


const controls = {
    bold,
    italic,
    underline,
    divider,
    tip,
    note,
    warning,
    code,
    photo,
    link,
    blockquote,
    autoGrow
}

export default controls;