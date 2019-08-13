const listParent = document.getElementById('listParent');       // สร้างตัวแปร listParent รับค่า element id ชื่อ listParent
  const disableParent = document.getElementById('disableParent'); // สร้างตัวแปร disableParent รับค่า element id ชื่อ disableParent
  function toggleDisable(element) { // สร้างฟังค์ชัน toggleDisable รับพารามิเตอร์ element (ส่งมาจากพวกโค้ด toggleDisable(...?);)
    console.log(`element = `+element.disabled);
    if (element.disabled) {         // ถ้า element เป็น disabled อยู่ 
      element.removeAttribute('disabled');    // ทำการลบคุณสมบัติ disabled ออกจาก element
    } else {
      element.setAttribute('disabled', true); // แล้ว element ไม่ disabled   เพิ่มคุณสมบัติ disabled ใส่ element
    }
  }
  function remove(id) { // สร้างฟังก์ชัน remove รับพารามิเตอร์ id
    console.log(`remove ID = `+id);
    document.getElementById(id).remove();     // รับค่า element จาก id จากนั้นทำการ ลบ element ที่ รับค่ามา
  }
  function edit(id) {   // สร้างฟังก์ชัน edit รับพารามิเตอร์ id
    console.log(`edit ID = `+id);
    const parent = document.getElementById(id);         // สร้างตัวแปร parent รับค่า element id = id
    const fullname = parent.querySelector('.fullname'); // เลือก element class = fullname ของ parent แล้วเก็บในตัวแปร fullname
    const age = parent.querySelector('.age');           // เลือก element class = age ของ parent แล้วเก็บในตัวแปร age
    const saveButton = parent.querySelector('.save');   // เลือก element class = save ของ parent แล้วเก็บในตัวแปร saveButton
    const editButton = parent.querySelector('.edit');   // เลือก element class = edit ของ parent แล้วเก็บในตัวแปร editButton
    toggleDisable(editButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ editButton
    toggleDisable(saveButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ saveButton
    toggleDisable(fullname);    // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ fullname
    toggleDisable(age);         // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ age
  }
  function save(id) {    // สร้างฟังก์ชัน save ที่รับพารามิเตอร์ id
    console.log(`save ID = `+id);
    const parent = document.getElementById(id);         // สร้างตัวแปร parent รับค่าelement id = id
    const fullname = parent.querySelector('.fullname'); // เลือก element class = fullname ของ parent แล้วเก็บในตัวแปร fullname
    const age = parent.querySelector('.age');           // เลือก element class = age ของ parent แล้วเก็บในตัวแปร age
    const saveButton = parent.querySelector('.save');   // เลือก element class = save ของ parent แล้วเก็บในตัวแปร saveButton
    const editButton = parent.querySelector('.edit');   // เลือก element class = edit ของ parent แล้วเก็บในตัวแปร editButton
    toggleDisable(editButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ editButton
    toggleDisable(saveButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ saveButton
    toggleDisable(fullname);    // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ fullname
    toggleDisable(age);         // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ age
  }
  
  function disable(id) { // สร้างฟังก์ชัน disable ที่รับพารามิเตอร์ id
    console.log(`disable ID = `+id);
    const list = document.getElementById(id); // สร้างตัวแปร list รับค่าelement id = id
    const enableButton = list.querySelector('.enable');   // เลือก element class = enable ของ list แล้วเก็บในตัวแปร enableButton
    const disableButton = list.querySelector('.disable'); // เลือก element class = disable ของ list แล้วเก็บในตัวแปร disableButton
    const editButton = list.querySelector('.edit');       // เลือก element class = edit ของ list แล้วเก็บในตัวแปร editButton
    const saveButton = list.querySelector('.save');       // เลือก element class = save ของ list แล้วเก็บในตัวแปร saveButton
    const fullnameInput = list.querySelector('.fullname');// เลือก element class = fullname ของ list แล้วเก็บในตัวแปร fullnameInput
    const ageInput = list.querySelector('.age');          // เลือก element class = age ของ list แล้วเก็บในตัวแปร ageInput
    toggleDisable(enableButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ enableButton
    toggleDisable(disableButton); // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ disableButton
// disable
    editButton.setAttribute('disabled', true);    // เพิ่มคุณสมบัติ disabled ใส่ editButton
    saveButton.setAttribute('disabled', true);    // เพิ่มคุณสมบัติ disabled ใส่ saveButton
    fullnameInput.setAttribute('disabled', true); // เพิ่มคุณสมบัติ disabled ใส่ fullnameInput
    ageInput.setAttribute('disabled', true);      // เพิ่มคุณสมบัติ disabled ใส่ ageInput
    disableParent.append(list);                   // นำ list ผนวกไว้ใน disableParent
  }
  function enable(id) { // สร้างฟังก์ชัน enable ที่รับพารามิเตอร์ id
    console.log(`enable ID = `+id);
    const list = document.getElementById(id); // สร้างตัวแปร list รับค่าelement id = id
    const enableButton = list.querySelector('.enable');   // เลือก element class = enable ของ list แล้วเก็บในตัวแปร enableButton
    const disableButton = list.querySelector('.disable'); // เลือก element class = disable ของ list แล้วเก็บในตัวแปร disableButton
    const editButton = list.querySelector('.edit');       // เลือก element class = edit ของ list แล้วเก็บในตัวแปร editButton1
    toggleDisable(enableButton);  // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ enableButton
    toggleDisable(disableButton); // ส่งฟังก์ชัน toggleDisable ที่มีพารามิเตอร์ disableButton
// enable
    editButton.removeAttribute('disabled'); // นำคุณสมบัติ disabled ออกจาก editButton
    listParent.append(list);                // นำ list ผนวกไว้ใน listParent
  }
  function submitForm(form) {               // สร้างฟังก์ชัน submitForm ที่รับพารามิเตอร์ form
    console.log(`form = `+form);
    const id = (new Date()).getTime();      // สร้างตัวแปร id เก็บค่า Date
    console.log(id);
    const fullnameInput = form['fullname']; // สร้างตัวแปร fullnameInput รับค่าที่กรอกในช่อง input ที่ชื่อว่า fullname ใน html
    const ageInput = form['age'];         // สร้างตัวแปร ageInput รับค่าที่กรอกในช่อง input ที่ชื่อว่า age ใน html
    const fullname = document.createElement('input');   //สร้างตัวแปร fullname เก็บค่า element input
    fullname.className = 'fullname';      // เพิ่ม class ให้ ตัวแปร fullname โดยชื่อ  class คือ fullname
    fullname.disabled = true;             // ทำให้ตัวแปร fullname อยู่ในโหมด disabled
    fullname.value = fullnameInput.value; // นำ value ของ fullnameInput มาใส่ไว้ใน value ของ ตัวแปร fullname
    const age = document.createElement('input'); //สร้างตัวแปร age เก็บค่า element input
    age.className = 'age';                // เพิ่ม class ให้ ตัวแปร age โดยชื่อ  class คือ age
    age.disabled = true;                  // ทำให้ตัวแปร age อยู่ในโหมด disabled
    age.type = 'number';                  // ตัวแปร age มีชนิด เป็น ตัวเลข
    age.value = ageInput.value;           // นำ value ของ ageInput มาใส่ไว้ใน value ของ ตัวแปร age
    const editButton = document.createElement('button'); // สร้างตัวแปร editButton เก็บค่า element button
    editButton.className = 'edit';        // เพิ่ม class ให้ ตัวแปร editButton โดยชื่อ  class คือ edit
    editButton.innerHTML = 'edit';        // ใส่ตัวอักษร edit ลงในปุ่ม editButton
    editButton.onclick = () => edit(id);  // เมื่อคลิก ให้ทำการเรียกฟังก์ชัน edit ที่รับพารามิเตอร์ id มาทำงาน
    const saveButton = document.createElement('button'); // สร้างตัวแปร saveButton เก็บค่า element button
    saveButton.className = 'save';        // เพิ่ม class ให้ ตัวแปร saveButton โดยชื่อ  class คือ save
    saveButton.disabled = true;           // ทำให้ตัวแปร saveButton อยู่ในโหมด disabled
    saveButton.innerHTML = 'save';        // ใส่ตัวอักษร save ลงในปุ่ม saveButton
    saveButton.onclick = () => save(id);  // เมื่อคลิก ให้ทำการเรียกฟังก์ชัน save ที่รับพารามิเตอร์ id มาทำงาน
 
    const delButton = document.createElement('button');     //สร้างตัวแปร  delButton เก็บค่า element button
    delButton.innerHTML = 'x';                      // ใส่ตัวอักษร x ลงในปุ่ม delButton
    delButton.onclick = () => remove(id);           // เมื่อคลิก ให้ทำการเรียกฟังก์ชัน remove ที่รับพารามิเตอร์ id มาทำงาน
    const disableButton = document.createElement('button'); //สร้างตัวแปร  disableButton เก็บค่า element button
    disableButton.className = 'disable';            // เพิ่ม class ให้ ตัวแปร disableButton โดยชื่อ  class คือ disable
    disableButton.innerHTML = 'disable';            // ใส่ตัวอักษร disable ลงในปุ่ม disableButton
    disableButton.onclick = () => disable(id);      // เมื่อคลิก ให้ทำการเรียกฟังก์ชัน disable ที่รับพารามิเตอร์ id มาทำงาน
    const enableButton = document.createElement('button');  //สร้างตัวแปร  enableButton เก็บค่า element button
    enableButton.className = 'enable';              // เพิ่ม class ให้ ตัวแปร enableButton โดยชื่อ  class คือ enable
    enableButton.disabled = true;                   // ทำให้ตัวแปร enableButton อยู่ในโหมด disabled
    enableButton.innerHTML = 'enable';              // ใส่ตัวอักษร enable ลงในปุ่ม enableButton
    enableButton.onclick = () => enable(id);        // เมื่อคลิก ให้ทำการเรียกฟังก์ชัน enable ที่รับพารามิเตอร์ id มาทำงาน
    const listChild = document.createElement('li'); // สร้างตัวแปร  listChild เก็บ element li
    listChild.id = id;                              // listChild มี id คือ id เป็น id เดียวกับที่เรา getTime มา
    console.log(listChild);
    listChild.append(fullname);         // ผนวก fullname ไว้ใน listChild
    listChild.append(age);              // ผนวก age ไว้ใน listChild
    listChild.append(editButton);       // ผนวก editButton ไว้ใน listChild
    listChild.append(saveButton);       // ผนวก saveButton ไว้ใน listChild
    listChild.append(delButton);        // ผนวก delButton ไว้ใน listChild
    listChild.append(disableButton);    // ผนวก disableButton ไว้ใน listChild
    listChild.append(enableButton);     // ผนวก enableButton ไว้ใน listChild
    listParent.appendChild(listChild);  // ผนวก listChild ไว้ใน listParent
    return true; // ส่งคืนค่า ture (ไม่ต้องเช็คอะไร)
 }