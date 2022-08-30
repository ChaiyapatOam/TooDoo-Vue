<template>
  <div id="app">


    <div class="wrapper container">
      <h1>สินค้าในร้าน</h1>
      <button class="btn btn-success">เพิ่มสินค้า</button>
      <main>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ชื่อสินค้า</th>
              <th scope="col">รูปภาพ</th>
              <th scope="col">คำอธิบาย</th>
              <th scope="col">ราคา</th>
              <th scope="col">จำนวน</th>
              <th scope="col">หมวดหมู่</th>
              <th scope="col">แก้ไขข้อมูล</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="name" scope="row"></td>
              <td class="pic">
                <img />
              </td>
              <td class="price"></td>
              <td class="edit">
                <button class="edit btn btn-warning">

                </button>
                <button class="edit btn btn-outline-danger">
                  ลบ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>

  </div>
</template>

<style>
</style>
