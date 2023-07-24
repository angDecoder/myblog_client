import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { createDraft, editDraft, updateDraft,publishDraft } from '../../features/draftSlice';
import usePrivateAxios from '../../hooks/usePrivateAxios';
import { toast } from 'react-toastify';
import './TextEditor.css';
import { useSelector, useDispatch } from 'react-redux';

function TextEditor() {

  const [toLink, setToLink] = useState('/edit/');
  const ax = usePrivateAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  let origDraft = useSelector(state => state.draft.edit[id]);
  const [draft, setDraft] = useState(
    JSON.parse(JSON.stringify(origDraft))
  );
  const [changes, setChanges] = useState({})

  // save changes 
  useEffect(() => {
    return function () {
      dispatch(editDraft({ draft }));
    }
  }, []);


  const toggleNavlink = () => {
    if (toLink === '/edit/')
      setToLink('/preview/');
    else
      setToLink('/edit/');
  }

  const saveDraft = () => {

    if (id === 'noid') {
      const { id, type, ...editedDraft } = draft;
      dispatch(createDraft({ ax, draft: editedDraft, navigate }));
    }
    else {
      const editedDraft = {};
      console.log(changes,draft);
      Object.keys(changes).forEach(key=>{
        if( changes[key] )
          editedDraft[key] = draft[key];
      })

      editedDraft.id = draft.id;

      dispatch( updateDraft({ax,draft : editedDraft}) );
    }

  }

  const publishTheDraft = ()=>{
      dispatch( publishDraft({ ax,id,navigate }) );
  }

  return (
    <div id='TextEditor'>
      <div id='edit_toggle'>
        <button onClick={saveDraft}>{id === 'noid' ? 'Create Draft' : 'Save Changes'}</button>
        {
          id !== 'noid' ?
            <button onClick={publishTheDraft} data-btn='blue'>Publish</button> :
            <></>
        }

        <NavLink onClick={toggleNavlink} className='navlink' to={"/editor" + toLink + id}>{
          toLink === '/edit/' ? 'Preview' : 'Edit Here'
        }</NavLink>
      </div>

      <Outlet context={{ draft, setDraft, changes,setChanges }} />

    </div>
  )
}

export default TextEditor