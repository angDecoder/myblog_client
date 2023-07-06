const getSelelectedText = (pre,post)=>{
    const input = document.querySelector('#editor_content > textarea');
    const start = input.selectionStart, end= input.selectionEnd;
    if( start===end ){
        input.focus();
        return;
    }
    const selected = input.value.slice(start, end);
    input.setRangeText(`${pre}${selected}${post}`);
    input.selectionStart += pre.length;
    input.selectionEnd -= post.length;
    input.focus();
}

const bold = ()=> getSelelectedText("**","**");

const italic = ()=> getSelelectedText("_","_");

const underline = ()=> getSelelectedText("<u>","</u>");

const divider = ()=> getSelelectedText('','--- \n');

const tip = ()=>{

}

const note = ()=>{

}

const warning = ()=>{

}

const code = ()=>{

}

const photo = ()=>{

}

const link = ()=>{

}

const blockquote = ()=>{

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
    blockquote
}

export default controls;