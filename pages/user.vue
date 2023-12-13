<template>
  <div>
    <div v-if="pending">...Loading</div>
    <template v-else>
      <!-- <DataTable
        :value="users"
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width:100%"
        :pt="{
          paginator: 'bg-red-300 flex justify-center',
          wrapper: 'bg-slate-50',
        }"
      >
        <template #header>
          <div
            class="flex py-5 px-3 flex-wrap align-items-center justify-content-between gap-2"
          >
            <span class="text-xl text-900 font-bold">Products</span>
          </div>
        </template>
        <template #pa></template>
        <Column
          field="username"
          header="User Name"
          class="border border-slate-200"
        ></Column>
        <Column
          field="address.city"
          header="City"
          class="border border-slate-200"
        ></Column>
        <Column
          field="email"
          header="Email"
          class="border border-slate-200"
        ></Column>
        <Column field="phone" header="Phone"></Column>
        <template #footer>
          In total there are {{ users ? users.length : 0 }} users.
        </template>
      </DataTable> -->

      <div
        class="border mt-5 border-slate-200 rounded-md dark:border-[#445269]"
      >
        <div class="py-6 px-4 flex justify-between">
          <h2 class="text-24 font-medium text-myColor dark:text-white">
            {{ $t("Users") }}
          </h2>
          <button
            @click="AddUserModal"
            class="flex items-center text-14 py-1 px-3 bg-myColor text-white dark:text-myColor dark:bg-white rounded-md"
          >
            <span>{{ $t("Add") }}</span>
            <Icon
              name="material-symbols:add-rounded"
              size="22"
              class="ml-2 text-white dark:text-myColor"
            ></Icon>
          </button>
        </div>
        <EasyDataTable
          buttons-pagination
          :rows-per-page="5"
          table-class-name="customize-table"
          :headers="headers"
          :items="users"
        >
          <template #header-email="header">
            {{ $t(header.text) }}
          </template>
          <template #header-username="header">
            {{ $t(header.text) }}
          </template>
          <template #header-name="header">
            {{ $t(header.text) }}
          </template>
          <template #header-address.city="header">
            {{ $t(header.text) }}
          </template>
          <template #header-phone="header">
            {{ $t(header.text) }}
          </template>
          <template #header-action="header">
            {{ $t(header.text) }}
          </template>
          <template #item-name="item">
            <div class="ltr:text-left rtl:text-right">
              {{ item.name.firstname + " " + item.name.lastname }}
            </div>
          </template>
          <template #item-username="item">
            <div class="ltr:text-left rtl:text-right">
              {{ item.username }}
            </div>
          </template>
          <template #item-email="item">
            <div class="ltr:text-left rtl:text-right">
              {{ item.email }}
            </div>
          </template>
          <template #item-address.city="item">
            <div class="ltr:text-left rtl:text-right">
              {{ item.address.city }}
            </div>
          </template>
          <template #item-phone="item">
            <div class="ltr:text-left rtl:text-right">
              {{ item.phone }}
            </div>
          </template>
          <template #item-action="item">
            <div class="flex gap-3">
              <button
                class="dark:bg-gray-800 bg-gray-200 hover:bg-slate-300 cursor-pointer dark:hover:bg-gray-700 rounded-md w-7 h-7 grid place-items-center"
              >
                <Icon
                  name="ph:pencil-simple-duotone"
                  class="text-myColor dark:text-white"
                  size="18"
                  @click="fillEdit(item.id)"
                />
              </button>
              <button
                @click="deleteUser(item.id)"
                class="dark:bg-gray-800 bg-gray-200 hover:bg-slate-300 cursor-pointer dark:hover:bg-gray-700 rounded-md w-7 h-7 grid place-items-center"
              >
                <Icon
                  name="fe:trash"
                  class="text-myColor dark:text-white"
                  size="18"
                />
              </button>
            </div>
          </template>
        </EasyDataTable>
      </div>
      <transition name="overlay">
        <div
          v-if="openModel"
          @click="openModel = false"
          class="fixed w-screen h-screen bg-black bg-opacity-60 z-[200] top-0 left-0"
        ></div>
      </transition>

      <Transition name="modal">
        <div
          class="fixed left-1/2 top-1/2 -translate-x-1/2 p-8 -translate-y-1/2 z-[300] min-w-[700px] bg-white dark:bg-myColor shadow-lg dark:shadow-gray-950 rounded-md min-h-[300px] -translate-x"
          v-if="openModel"
        >
          <div class="mb-10">
            <h2 class="text-24 text-myColor dark:text-white font-medium">
              {{ idUser == 0 ? $t("Add_user") : $t("Edit_user") }}
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-y-8 gap-x-7">
            <InputsInputFieldValidation
              v-model="username"
              :errorMsg="errors.username"
              placeHoldValue="Username"
            />
            <InputsInputFieldValidation
              v-model="email"
              :errorMsg="errors.email"
              placeHoldValue="Email"
            />
            <InputsInputFieldValidation
              v-model="firstname"
              :errorMsg="errors.firstname"
              placeHoldValue="Firstname"
            />
            <InputsInputFieldValidation
              v-model="lastname"
              :errorMsg="errors.lastname"
              placeHoldValue="Lastname"
            />
            <InputsInputFieldValidation
              v-model="city"
              :errorMsg="errors.city"
              placeHoldValue="City"
            />
            <InputsInputFieldValidation
              v-model="phone"
              :errorMsg="errors.phone"
              placeHoldValue="Phone"
            />
          </div>
          <div class="Action flex justify-end gap-4 w-full mt-10">
            <button
              class="py-2 px-3 text-14 rounded-sm hover:bg-slate-200 dark:hover:bg-slate-700 text-myColor dark:text-white"
              @click="resetForm()"
            >
              {{ $t("Cancel") }}
            </button>
            <button
              @click="idUser == 0 ? submitForm() : EditUser()"
              class="py-2 px-3 text-14 min-w-[100px] cursor-pointer rounded-sm bg-teal-600 hover:bg-teal-800 text-white"
            >
              <Icon
                v-if="loadingAdd"
                name="eos-icons:bubble-loading"
                class="text-white"
                size="19"
              />
              <template v-else>
                {{ idUser == 0 ? $t("Add") : $t("Edit") }}</template
              >
            </button>
          </div>
        </div>
      </Transition>
    </template>
  </div>
</template>

<script setup>
import * as yup from "yup";
const colorMode = useColorMode();
const openModel = ref(false);
import Swal from "sweetalert2";
const headers = [
  { text: "Email", value: "email" },
  { text: "User Name", value: "username" },
  { text: "Name", value: "name" },
  { text: "City", value: "address.city" },
  { text: "Phone", value: "phone" },
  { text: "Action", value: "action" },
];
const { t, locale } = useI18n();
const validationSchema = yup.object({
  email: yup
    .string()
    .email(() => t("email_msg"))
    .required(() => t("required_field", ["Email"])),
  username: yup
    .string(() => t("usernNameString"))
    .required(() => t("required_field", [t("Username")])),
  firstname: yup.string().required(() => t("required_field", [t("Firstname")])),
  lastname: yup.string().required(() => t("required_field", [t("Lastname")])),
  city: yup.string().required(() => t("required_field", [t("City")])),
  phone: yup
    .string()
    .matches(
      /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      () => t("phone_validation")
    )
    .required(() => t("required_field", [t("Phone")])),
});
watch(locale, () => {
  resetForm();
});

const { resetForm, errors, handleSubmit, defineField } = useForm({
  validationSchema,
});

const [email, emailAttrs] = defineField("email");
const [username, usernameAttrs] = defineField("username");
const [firstname, firstnameAttrs] = defineField("firstname");
const [lastname, lastnameAttrs] = defineField("lastname");
const [city, cityAttrs] = defineField("city");
const [phone, phoneAttrs] = defineField("phone");
const loadingAdd = ref(false);
const submitForm = handleSubmit(async (values) => {
  loadingAdd.value = true;
  const { data, error } = await useFetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: values,
  });
  if (error.value != null) {
    alert("Something went wrong");
    loadingAdd.value = false;
    return;
  }

  // console.log({
  //   ...data.value,
  //   ...values,
  //   address: { city: values.city },
  //   name: { firstname: values.firstname, lastname: values.lastname },
  // });
  users.value.push({
    ...data.value,
    ...values,
    address: { city: values.city },
    name: { firstname: values.firstname, lastname: values.lastname },
  });
  resetForm();
  loadingAdd.value = false;
});
let idUser = 0;
function fillEdit(id) {
  resetForm();
  openModel.value = true;
  const user = users.value.find((item) => item.id == id);
  username.value = user?.username;
  email.value = user?.email;
  firstname.value = user?.name.firstname;
  lastname.value = user?.name.lastname;
  city.value = user?.address.city;
  phone.value = user?.phone;
  idUser = id;
}
const EditUser = handleSubmit(async (values) => {
  loadingAdd.value = true;
  const { data, error } = await useFetch(
    "https://fakestoreapi.com/users/" + idUser,
    {
      method: "PATCH",
      body: values,
    }
  );
  console.log(data.value);
  if (error.value != null) {
    alert("Something went wrong");
    loadingAdd.value = false;
    return;
  }

  users.value.map((item) => {
    if (item.id == idUser) {
      item.username = data.value.username;
      item.email = data.value.email;
      item.address.city = data.value.city;
      item.name.firstname = data.value.firstname;
      item.name.lastname = data.value.lastname;
      item.phone = data.value.phone;
    }
  });
  loadingAdd.value = false;
  openModel.value = false;
  resetForm();
});
function AddUserModal() {
  idUser = 0;
  openModel.value = true;
  resetForm();
}
async function deleteUser(id) {
  await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const { error, data } = await useFetch(
        "https://fakestoreapi.com/users/" + id,
        {
          method: "DELETE",
        }
      );
      console.log(error, data);
      if (error.value) {
        Swal.fire({
          title: "Error!",
          text: "Your file has been deleted.",
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      }
      users.value = users.value.filter((item) => item.id != id);
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
}
definePageMeta({
  layout: "layout-dashboard",
});
//const users = ref(null);
const { pending, data: users } = useFetch("https://fakestoreapi.com/users", {
  lazy: true,
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease-in-out, left 0.8s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  left: 70%;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: 0.7s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.customize-table {
  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-body-item-padding: 10px 15px;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;
}
.dark .customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #1c1c1c;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #1c1c1c;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #1c1c1c;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #1c1c1c;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #1c1c1c;
}
</style>