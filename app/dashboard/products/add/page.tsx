import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css';

function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" required />
        <input type="text" placeholder="size" name="size" required />
        <textarea
          name="desc"
          id="desc"
          placeholder="Description"
          rows={16}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddProductPage;
