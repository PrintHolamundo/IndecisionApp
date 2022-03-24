import { shallowMount, mount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision component",() => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallowMount(Indecision);
        })

        test("debe de hacer match con el snapshot", () => {
            expect(wrapper.html()).toMatchSnapshot();
        })

        test("Escribir en el input no debe de disparar nada (console.log)", () => {
            // const input = wrapper.find("input");
            // const spy = jest.spyOn(console, "log");
            // input.setValue("Hola");
            // expect(spy).not.toHaveBeenCalled();

        })

        test("Escribir el simbolo de '?' debe de disparar  el fetch", () => {
            // const input = wrapper.find("input");
            // const spy = jest.spyOn(wrapper.vm, "fetchData");
            // input.setValue("?");
            // expect(spy).toHaveBeenCalled();

        })

        test("pruebas en getAwswer ", () => {
            // const spy = jest.spyOn(wrapper.vm, "getAnswer");
            // wrapper.vm.getAnswer();
            // expect(spy).toHaveBeenCalled();

        })
        

        test("pruebas en getAwswer - Fallo en el API ", () => {
            // const spy = jest.spyOn(wrapper.vm, "getAnswer");
            // wrapper.vm.getAnswer();
            // expect(spy).toHaveBeenCalled();

        })

    })
