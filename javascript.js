function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}


function delete_row(element){
    var container = element.parentElement.parentElement;
    if (confirm(`¿Estás segura de que quieres eliminar este artículo?`)) {
        document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].removeChild(container);
      } else {
      }
}


function add_item_click(element) {

   const add_item_table = element.parentElement.parentElement.children;
   const Store_name = add_item_table[1].getElementsByTagName("input")[0].value;
   const Disponibility = add_item_table[2].getElementsByTagName("input")[0].checked;
   const Product_name = add_item_table[3].getElementsByTagName("input")[0].value;
   const Price = add_item_table[4].getElementsByTagName("input")[0].value;
   const Min_price = add_item_table[5].getElementsByTagName("input")[0].value;
   const Cantity = add_item_table[6].getElementsByTagName("input")[0].value;
   const Color = add_item_table[7].getElementsByTagName("input")[0].value;
   const Size = add_item_table[8].getElementsByTagName("input")[0].value;
   const Location = add_item_table[9].getElementsByTagName("input")[0].value;
   const Ean = add_item_table[10].getElementsByTagName("input")[0].value;
   const Sku = add_item_table[11].getElementsByTagName("input")[0].value;
   const Referance_number = add_item_table[12].getElementsByTagName("input")[0].value;

    //console.log("Store_name " + Store_name);
    //console.log("Disponibility " + Disponibility);
    //console.log("Product_name " + Product_name);
    //console.log("Price " + Price);
    //console.log("Min_price " + Min_price);
    //console.log("Cantity " + Cantity);
    //console.log("Color " + Color);
    //console.log("Size " + Size);
    //console.log("Location " + Location);
    //console.log("Ean " + Ean);
    //console.log("Sku " + Sku);
    //console.log("Referance_number " + Referance_number);

    var row_innerHTML =  `
    <tr>
    <td><button class="new-row-button" onclick="delete_row(this);">-</button></td>
    <td><input id="row" type="text" value="${Store_name}"></td>
    <td>
    <label class="switch">
    <input id="switcher" type="checkbox" `
    if(Disponibility){
        row_innerHTML+="checked";
    }else{
        row_innerHTML+="unchecked";
    }
    row_innerHTML+=`>
    <span class="slider"></span>
    </label>
    </td>
    <td><input id="row" type="text" value="${Product_name}"></td>
    <td id="small-input"><input id="row" onkeypress="return isNumberKey(event)"type="number" min ="0" step=".01" required  value="${Price}">€</td>
    <td id="small-input"><input id="row" onkeypress="return isNumberKey(event)"type="number" min ="0" step=".01" required  value="${Min_price}">€</td>
    <td id="small-input"><input id="row" onkeypress="return isNumberKey(event)"type="number" min ="0" step="1" required  value="${Cantity}"></td>
    <td id="small-input"><input id="row" type="text" value="${Color}"></td>
    <td id="small-input"><input id="row" type="text" value="${Size}"></td>
    <td id="medium-input"><input id="row" type="text" value="${Location}"></td>
    <td id="medium-input"><input id="row" type="text" value="${Ean}"></td>
    <td id="medium-input"><input id="row" type="text" value="${Sku}"></td>
    <td id="medium-input"><input id="row" type="text" value="${Referance_number}"></td>
    </tr>`;
    document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].insertRow().innerHTML =row_innerHTML;

}