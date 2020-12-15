<template>
  <div class="card card-custom gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">Market Leaders</h3>
      <div class="card-toolbar">
        <div class="dropdown dropdown-inline">
          <a
            href="#"
            class="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ki ki-bold-more-ver"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
            <!--begin::Navigation-->
            <ul class="navi navi-hover">
              <li class="navi-header font-weight-bold py-4">
                <span class="font-size-lg">Choose Label:</span>
                <i
                  class="flaticon2-information icon-md text-muted"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Click to learn more..."
                ></i>
              </li>
              <li class="navi-separator mb-3 opacity-70"></li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-success"
                      >Customer</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span class="label label-xl label-inline label-light-danger"
                      >Partner</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-warning"
                      >Suplier</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span
                      class="label label-xl label-inline label-light-primary"
                      >Member</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-item">
                <a href="#" class="navi-link">
                  <span class="navi-text">
                    <span class="label label-xl label-inline label-light-dark"
                      >Staff</span
                    >
                  </span>
                </a>
              </li>
              <li class="navi-separator mt-3 opacity-70"></li>
              <li class="navi-footer py-4">
                <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                  <i class="ki ki-plus icon-sm"></i>Add new</a
                >
              </li>
            </ul>
            <!--end::Navigation-->
          </div>
        </div>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div
          class="d-flex flex-wrap align-items-center"
          v-bind:key="i"
          v-bind:class="{ 'mb-9': lastElement(i) }"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-4">
            <div
              class="symbol-label"
              :style="`background-image:url(${item.text0})`"
            ></div>
          </div>
          <!--end::Symbol-->
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
            <a
              href="#"
              class="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
              >{{ item.text1 }}</a
            >
            <span class="text-muted font-weight-bold font-size-sm my-1">{{
              item.text2
            }}</span>
            <span class="text-muted font-weight-bold font-size-sm"
              >Created by:
              <span class="text-primary font-weight-bold">{{
                item.text3
              }}</span></span
            >
          </div>
          <!--end::Title-->
          <!--begin::Info-->
          <div class="d-flex align-items-center py-lg-0 py-2">
            <div class="d-flex flex-column text-right">
              <span class="text-dark-75 font-weight-bolder font-size-h4">{{
                item.text4
              }}</span>
              <span class="text-muted font-size-sm font-weight-bolder"
                >votes</span
              >
            </div>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-2",
  data() {
    return {
      list: [
        {
          text0: "media/stock-600x400/img-17.jpg",
          text1: "Cup & Green",
          text2: "Local, clean & environmental",
          text3: "CoreAd",
          text4: "24,900"
        },
        {
          text0: "media/stock-600x400/img-10.jpg",
          text1: "Yellow Background",
          text2: "Strong abstract concept",
          text3: "KeenThemes",
          text4: "70,380"
        },
        {
          text0: "media/stock-600x400/img-17.jpg",
          text1: "Nike & Blue",
          text2: "Footwear overalls",
          text3: "Invision Inc.",
          text4: "7,200"
        },
        {
          text0: "media/stock-600x400/img-9.jpg",
          text1: "Desserts platter",
          text2: "Food trends & reviews",
          text3: "Figma Studio",
          text4: "36,450"
        },
        {
          text0: "media/stock-600x400/img-12.jpg",
          text1: "Cup & Green",
          text2: "Local, clean & environmental",
          text3: "CoreAd",
          text4: "23,900"
        }
      ]
    };
  },
  methods: {
    lastElement(i) {
      if (i === this.list.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  }
};
</script>
