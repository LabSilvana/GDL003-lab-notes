(window.webpackJsonplabnotes=window.webpackJsonplabnotes||[]).push([[0],{35:function(e,t,n){e.exports=n(61)},40:function(e,t,n){},41:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(28),c=n.n(i),r=(n(40),n(9)),s=n(10),u=n(12),l=n(11),d=n(13),m=(n(41),n(32)),h=n(15),p=n(14),v=n(16),b=n.n(v),f={apiKey:"AIzaSyB5omm6vkDXK5tv4qv-4kMw7Ob1XLkkLJQ",authDomain:"notesreact-12cc5.firebaseapp.com",databaseURL:"https://notesreact-12cc5.firebaseio.com",projectId:"notesreact-12cc5",storageBucket:"notesreact-12cc5.appspot.com",messagingSenderId:"623049857137"},O=(n(50),n(51),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).noteContent=e.noteContent,n.noteId=e.noteId,n.handleRemove=n.handleRemove.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleRemove",value:function(){window.confirm("Estas seguro de eliminar?")&&this.props.removeNote(this.noteId)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Note"},o.a.createElement("span",{onClick:this.handleRemove},"\xd7"),o.a.createElement("p",null,this.noteContent))}}]),t}(o.a.Component)),j=(n(52),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).addNote=e.addNote.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addNote",value:function(){this.props.addNote(this.textInput.value),this.textInput.value="",this.textInput.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"NoteForm"},o.a.createElement("input",{ref:function(t){e.textInput=t},placeholder:"Write a note",type:"text"}),o.a.createElement("button",{onClick:this.addNote},"Add Note"))}}]),t}(o.a.Component)),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={notes:[]},e.app=b.a.initializeApp(f),e.db=e.app.database().ref().child("notes"),e.addNote=e.addNote.bind(Object(p.a)(e)),e.removeNote=e.removeNote.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.notes;this.db.on("child_added",(function(n){t.push({noteId:n.key,noteContent:n.val().noteContent}),e.setState({notes:t})})),this.db.on("child_removed",(function(n){for(var a=0;a<t.length;a++)t[a].noteId===n.key&&t.splice(a,1);e.setState({notes:t})}))}},{key:"removeNote",value:function(e){this.db.child(e).remove()}},{key:"addNote",value:function(e){this.db.push().set({noteContent:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"notesContainer"},o.a.createElement("div",{className:"notesHeader"},o.a.createElement("h1",null,"Sil-Notes")),o.a.createElement("div",{className:"notesBody"},o.a.createElement(j,{addNote:this.addNote})),o.a.createElement("div",{className:"notesFooter"},this.state.notes.map((function(t){return o.a.createElement(O,{noteContent:t.noteContent,noteId:t.noteId,key:t.noteId,removeNote:e.removeNote})}))))}}]),t}(a.Component),N=n(30),I=n.n(N);b.a.initializeApp({apiKey:"AIzaSyB5omm6vkDXK5tv4qv-4kMw7Ob1XLkkLJQ",authDomain:"notesreact-12cc5.firebaseapp.com"});var E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={isSignedIn:!1},n.uiConfig={signInFlow:"popup",signInOptions:[b.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},n.componentDidMount=function(){b.a.auth().onAuthStateChanged((function(e){n.setState({isSignedIn:!!e})}))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.isSignedIn?o.a.createElement("div",null,"Signed In!"):o.a.createElement(I.a,{uiConfig:this.uiConfig,firebaseAuth:b.a.auth()}))}}]),t}(o.a.Component);var y=function(){return o.a.createElement(m.a,null,o.a.createElement(h.a,{path:"/",exact:!0,component:E}),o.a.createElement(h.a,{path:"/notes/",component:k}))},g=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(y,null)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4be0235e.chunk.js.map