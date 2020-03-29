const comments = [{
    id: '1',
    name: 'razvan',
    msg: 'ce faci2?',
    imag:'/img1.jpg',
    randId:Math.floor(Math.random()*100 +1)
}, ]
console.log(comments);

const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');
const coomentList = document.querySelector('#commentList');


btn.addEventListener('click', function(e) {
   
    //e.preventDefault;

    comments.push({
        name: 'Alex',
        msg: input.value,
        imag:'https://unsplash.com/photos/hh3ViD0r0Rc',
        randId:Math.floor(Math.random()*100 +1),
        email :'email@gmail.com',
        
    });

    displayComments(comments, document.body);
   
    
})
displayComments(comments, document.body)

function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(title) {
        const h1 = document.createElement("h1");
        h1.innerText = title;
        return h1;
    }
    function AddImg(imag){
        const img=document.createElement("img");
        img.src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=80';
       // console.log("creare element "+img)
        return img;
    }
    function addEmail(email){
        const em=document.createElement("p");
        em.innerText=email;
        return em;     
    }


    //creare comentariu !
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');
        containerBox.setAttribute("id","containerBox");
        
        
        const imagine =AddImg(comment.imag);
        const email= addEmail(comment.email);
        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);

        //creare buton Delete
        var btnDelete = document.createElement("BUTTON");
        btnDelete.innerHTML = "Delete";
        btnDelete.style.float="right"

        const containerHeader = document.createElement('div');
        containerHeader.setAttribute('class',"containerHeader");


        containerHeader.appendChild(imagine);
        containerHeader.appendChild(title);
        containerHeader.appendChild(email);
       
        containerBox.appendChild(containerHeader);
        containerBox.appendChild(p);
        containerBox.appendChild(btnDelete);

        containerHeader.style.display='flex';
        containerHeader.style.alignItems='center';
        containerBox.style.background='#fae6ff';
        containerBox.style.border='black solid 1px'
        
        //stilzare dom



        btnDelete.addEventListener('click',function(){
            console.log(this.getAttribute('id-data'))
             containerBox.remove();
            
        });
        

        return containerBox;
    }
    

    // parcurgere commentari
    
    for (let idx = 0; idx < comments.length; idx++) {
        const comment = comments[idx];
       // / reaza preprezenarea coentariuui in DO
       
        let commentNode = createCommentNode(comment);  
        // pnem in dom cmentaru
        containerNode.appendChild(commentNode);
        console.log(commentNode)
      //  comment=[];
    
       
       
}}