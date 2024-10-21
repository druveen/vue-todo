import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TodoCard from "../TodoCard.vue";
import vuetify from "../../../test-utils/vuetify-plugin";

describe("TodoCard.vue", () => {
  const todo = { id: 1, title: "Test Todo", description: "Test Description" };

  test("renders todo title and description", () => {
    const wrapper = mount(TodoCard, {
      props: { todo },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.html()).toContain(todo.title);
    expect(wrapper.html()).toContain(todo.description);
  });

  test("emits an edit event when the edit button is clicked", async () => {
    const wrapper = mount(TodoCard, {
      props: { todo },
      global: {
        plugins: [vuetify],
      },
    });
    const editButton = wrapper.find("button .mdi-pencil");
    await editButton.trigger("click");
    expect(wrapper.emitted().edit).toBeTruthy();
    expect(wrapper.emitted().edit[0]).toEqual([todo]);
  });

  test("emits a complete event when the complete button is clicked", async () => {
    const wrapper = mount(TodoCard, {
      props: { todo },
      global: {
        plugins: [vuetify],
      },
    });
    const completeButton = wrapper.find("button .mdi-check");
    await completeButton.trigger("click");
    expect(wrapper.emitted().complete).toBeTruthy();
    expect(wrapper.emitted().complete[0]).toEqual([todo.id]);
  });
});
