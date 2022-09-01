<template>
  <div id="app">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">

            <div class="card">
              <div class="card-header text-center">
                <h1>Too Doo</h1>

              </div>
              <div class="card-body p-5">
                <form>
                  <div class="form row">
                    <div class="col-10">
                      <input v-model="newTask" type="text" id="inputTask" class="form-control" placeholder="Enter Task">
                    </div>

                    <div class="col">
                      <button class="btn btn-primary" @click="onAddTask">Add</button>
                    </div>
                  </div>
                </form>
                <br>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ชื่อรายการ</th>
                      <th scope="col">แก้ไข</th>
                    </tr>
                  </thead>

                  <tbody v-for="(task, index) in tasks" :key="index">
                    <tr>
                      <td class="name" scope="row">{{ task.title }}</td>
                      <td class="edit">
                        <button class="btn btn-warning" @click="onUpdateTask(task._id)">
                          <!-- <a :href="`/admin/product/${product._id}`"> แก้ไข</a> -->
                          แก้ไข
                        </button>
                        &nbsp;
                        <button class="edit btn btn-outline-danger" @click="onDeleteTask(task._id, index)">
                          ลบ
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'App',
  metaInfo: {
    title: 'Too-doo',
  },
  data() {
    return {
      tasks: [],
      newTask: ""
    }
  },
  methods: {
    async getAllTask() {
      const response = await axios.get("https://goldfish-app-nvlse.ondigitalocean.app/tasks")
      // console.log(response);
      this.tasks = response.data
    },
    async onAddTask() {
      const body = {
        title: this.newTask
      }
      if (this.newTask != "") {
        await axios.post("https://goldfish-app-nvlse.ondigitalocean.app/tasks", body)
      }
      this.getAllTask()
      this.newTask = ""

    },
    async onUpdateTask(id) {
      try {
        const { data } = await axios.get(`https://goldfish-app-nvlse.ondigitalocean.app/tasks/${id}`)
        this.$swal({
          title: 'แก้ไข',
          html: ` 
  <label class='swal2-label' style="width: 80px;">Title</label>
  <input type="text" id="title" class="swal2-input" style='width: 200px;' placeholder="ชื่อสินค้า" value="${data.title}"> <br>`,
          cancelButtonText: 'ยกเลิก',
          confirmButtonText: 'บันทึก',
          showCancelButton: true,
          focusConfirm: false,
          reverseButtons: true,
          showCloseButton: true,
          preConfirm: () => {
            const title = this.$swal.getPopup().querySelector('#title').value
            if (!title) {
              this.$swal.showValidationMessage('โปรดกรอกชื่อ')
            }
            return {
              title,
            }
          },
        }).then(async (result) => {
          const body = {
            title: result.value.title,
          }
          // console.log(body)

          await axios.patch(`https://goldfish-app-nvlse.ondigitalocean.app/tasks/${id}`, body)
          // console.log(res)
          this.$swal.fire({
            type: 'success',
            title: 'แก้ไขสำเร็จ',
          })

          await this.getAllTask()
        })
      } catch (err) {
        console.log(err)
        this.$swal.fire({
          type: 'error',
          title: 'เกิดข้อผิดพลาด',
          // text: `name:${result.value.name}`,
        })
      }
    },
    async onDeleteTask(id, index) {
      this.$swal
        .fire({
          title: 'ลบรายการ',
          showCancelButton: true,
          cancelButtonText: 'ยกเลิก',
          text: `คุณต้องการลบรายการ  หรือไม่`,
          type: 'warning',
          confirmButtonText: 'ลบ',
          confirmButtonColor: 'rgb(239, 68, 68)',
        })
        .then(async (result) => {
          if (result.value) {
            this.tasks.splice(index, 1)
            await axios.delete(`https://goldfish-app-nvlse.ondigitalocean.app/tasks/${id}`)
          } else {
            console.log('error!!!!')
          }
        })
    },
  },
  mounted() {
    this.getAllTask()
    // this.$watch('tasks', this.taskUpdated, {
    //   deep: true
    // })
  },
  created() {

  },
}
</script>
<style>
</style>
