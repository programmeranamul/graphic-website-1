import style from "../../../styles/Home/HomeVirtualPhotoEditing.module.css";

function HomeVirtualPhotoEditingCont() {
  return (
    <article className={style.con}>
      <p className={style.con_p}>
        Because a quick product shoot can easily turn into a week or more of
        editing and formatting your images. Let us look after the edits, so you
        can get back to the work that needs you.
      </p>
      <p className={style.price}>
      Starting at <span>0.77 NIS</span> per image
      </p>
    </article>
  );
}

export default HomeVirtualPhotoEditingCont;
