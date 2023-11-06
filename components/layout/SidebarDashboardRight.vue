<template>
  <div
    class="fixed w-0 h-screen ltr:right-0 overflow-y-auto top-0 ltr:border-l rtl:border-r rtl:left-0 bg-white dark:bg-myColor transition-[width,left,right,background-color] duration-500 z-50 border-border border-opacity-10 dark:border-white dark:border-opacity-10"
    :class="{ 'w-[280px]': modelValue }"
  >
    <div class="mx-5">
      <div class="flex justify-end py-2">
        <button
          @click="$emit('update:modelValue', !modelValue)"
          class="visible lg:hidden"
        >
          <Icon
            name="mdi:close"
            size="22"
            class="text-myColor dark:text-white"
          ></Icon>
        </button>
      </div>
    </div>
    <div class="mb-5 mt-2 mx-5 relative">
      <h2
        class="text-14 font-semibold text-myColor dark:text-white mb-5 capitalize"
      >
        {{ $t(notifications.title) }}
      </h2>
      <template v-if="notifications.list?.length > 0">
        <div class="w-full overflow-hidden">
          <ul>
            <NotificationsNotification
              v-for="(notificationList, index) in notifications.list"
              :key="index"
              :notification="notificationList"
            />
          </ul>
        </div>
      </template>
    </div>
    <div class="mb-5 mt-2 mx-5 relative">
      <h2
        class="text-14 font-semibold text-myColor dark:text-white mb-5 capitalize"
      >
        {{ $t(activities.title) }}
      </h2>
      <template v-if="activities.list?.length > 0">
        <div class="w-full overflow-hidden">
          <ul>
            <NotificationsActivity
              v-for="(activityList, index) in activities.list"
              :key="index"
              :activity="activityList"
            />
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
const notifications = {
  title: "Notifications",
  list: [
    {
      title: "You have a bug that needs to be fixed.",
      subtitle: "Just now",
      icon: "insect.png",
    },
    {
      title: "New user registered",
      subtitle: "59 minutes ago",
      icon: "personne.png",
    },
    {
      title: "You have a bug that needs to be fixed.",
      subtitle: "Just now",
      icon: "insect.png",
    },
    {
      title: "YAndi Lane subscribed to you",
      subtitle: "Today, 11:59 AM",
      icon: "resaux.png",
    },
  ],
};
const activities = {
  title: "activities",
  list: [
    {
      title: "You have a bug that needs to be fixed.",
      subtitle: "Just now",
      icon: "IconSet.png",
    },
    {
      title: "Released a new version",
      subtitle: "59 minutes ago",
      icon: "IconSet1.png",
    },
    {
      title: "Submitted a bug.",
      subtitle: "12 min ago",
      icon: "IconSet2.png",
    },
    {
      title: "Modified A data in Page X",
      subtitle: "Today, 11:59 AM",
      icon: "IconSet3.png",
    },
    {
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2023",
      icon: "IconSet4.png",
    },
    {
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2023",
      icon: "IconSet4.png",
    },
    {
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2023",
      icon: "IconSet4.png",
    },
    {
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2023",
      icon: "IconSet4.png",
    },
    {
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2023",
      icon: "IconSet4.png",
    },
  ],
};
</script>

<style scoped>
</style>