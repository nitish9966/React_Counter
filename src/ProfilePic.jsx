import styles from './ProfilePic.module.css'


function ProfilePic(){

    const imageUrl='./src/assets/pikachu.jpg';

    const handle=(e)=>{
        e.target.style.display='none';
    }

    return(
    <img className={styles.image1} src={imageUrl} onClick={(e)=>handle(e)}></img>
    );
}

export default ProfilePic;