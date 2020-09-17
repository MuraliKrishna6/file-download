import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images:any=[];
  allfiles:any=[];

  constructor(){
   
  }

  fileUploads(event){
     var files=event.target.files;
  
     if(files){
       for(let i=0;i<files.length;i++){
         const image={
           name:'',
           type:'',
           size:'',
           url:''
         };
         this.allfiles.push(files[i]);
         console.log("allfiles",this.allfiles);
         
         image.name=files[i].name;
         image.type=files[i].type;
         image.size=files[i].size;
         const reader =new FileReader(); 
         reader.onload=(filedata)=>{
           image.url=reader.result+'';
           this.images.push(image);
           console.log("images",this.images);
          //  console.log("imageurl",image.url);
          };
         reader.readAsDataURL(files[i])
        //  console.log("dataasurl",reader.readAsDataURL(files[i]));
        }
      }
     event.srcElement.value=null;
  }

  deleteimage(image){
    const index=this.images.indexOf(image)
     this.images.splice(index,1);
        
  }

  // save(){

  // }
}
