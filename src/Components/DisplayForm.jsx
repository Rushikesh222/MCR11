export const DisplayForm = () => {
  return (
    <div>
      <form onSubmit={handelFormData}>
        <label>
          Department
          <select name="department">
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>

        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <input type="textarea" name="description" />
        </label>
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <label>
          Stock:
          <input type="text" name="stock" />
        </label>
        <label>
          SKU:
          <input type="text" name="sku" />
        </label>
        <label>
          Supplier"
          <input type="text" name="supplier" />
        </label>
        <label>
          Delivered:
          <input type="text" name="delivered" />
        </label>
        <label>
          Image Url:
          <input type="text" name="image" />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
};
