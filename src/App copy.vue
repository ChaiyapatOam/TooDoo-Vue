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
                <!-- <form>
                  <div class="form row">
                    <div class="col-10">
                      <input v-on:keyup.enter="onAddTask" v-model="newTask" type="text" id="inputTask"
                        class="form-control" placeholder="Enter Task">
                    </div>

                    <div class="col">
                      <button class="btn btn-primary" @click="onAddTask">Add</button>
                    </div>
                  </div>
                </form> -->
                <br>

                <!-- Tabs content -->
                <div class="tab-content" id="ex1-content">
                  <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <ul class="list-group mb-0">
                      <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style="background-color: #f4f6f7;">
                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                        <input type="text" value="dsfsdfdsfsdfsd" class="form-control">

                        <!-- <s>Cras justo odio</s> -->
                      </li>
                      <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style="background-color: ;">
                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />

                        <s>Cras justo odio</s>
                      </li>

                      <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" v-for="task in tasks"
                        :key="task._id">
                        <div class="row d-flex">
                          <div class="col-10">
                            <input @click="onUpdateTask" class="form-check-input me-2" type="checkbox" />
                            <input type="text" v-model="task.title" class="form-control">
                          </div>

                          <div class="col">
                            <button class="btn btn-primary" @click="onAddTask">Add</button>
                            &nbsp;
                            <b-icon icon="trash" @click="onDeleteTask(task._id, index)"></b-icon>
                          </div>
                        </div>

                        <!-- <s style="font-size:1rem;font-weight: 400;">{{ task.title }}</s> -->
                      </li>

                    </ul>
                  </div>
                </div>
                <!-- Tabs content -->
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
      const res = await axios.post("https://goldfish-app-nvlse.ondigitalocean.app/tasks", body)
      console.log(res);
      this.getAllTask()
      this.newTask = ""

    },
    async onUpdateTask(id, done) {
      const body = {
        done: !done
      }
      console.log(body);
      await axios.patch(`https://goldfish-app-nvlse.ondigitalocean.app/tasks/${id}`, body)
      this.getAllTask()
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
