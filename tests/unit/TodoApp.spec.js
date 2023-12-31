import {mount} from "@vue/test-utils";
import TodoApp from '@/components/TodoApp';
describe('TodoApp.vue', ()=>{
    it('should render todo text', ()=>{
        const wrapper = mount(TodoApp);
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe('Feed Cat')
    })
})