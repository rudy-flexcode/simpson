 interface AvatarProps{
    image:string;
    firstName:string;
    lastName:string;
 }
 
 
 
 
 function Avatar (props: AvatarProps){


    const {image, firstName , lastName} = props ;
  return(
    <div>
        <img src={image}  />
        <p>
            {firstName} {lastName}
        </p>

    </div>
  );
}
  export default Avatar;
  