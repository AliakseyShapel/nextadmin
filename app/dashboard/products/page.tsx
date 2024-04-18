import Link from 'next/link';
import Search from '../../ui/dashboard/search/search';
import styles from '../../ui/dashboard/products/products.module.css';
import Image from 'next/image';
import Pagination from '../../ui/dashboard/pagination/pagination';

function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src="/noproduct.jpg"
                  alt=""
                  height={40}
                  width={40}
                />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2023</td>
            <td>23</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
export default ProductsPage;
