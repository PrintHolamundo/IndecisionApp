import { shallowMount, mount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision component", () => {
    let wrapper;
    let clgSpy;
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, "log");
    })

    test("debe de hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test("Escribir en el input no debe de disparar nada (console.log)", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
        const input = wrapper.find("input");
        await input.setValue("Hola Mundo");
        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(0);

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
