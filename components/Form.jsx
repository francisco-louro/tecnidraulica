import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Telefone" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Selecionar"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Selecione uma opção</SelectLabel>
                <SelectItem value="construction">Hidráulica</SelectItem>
                <SelectItem value="renovation">Pneumática</SelectItem>
                <SelectItem value="restoration">Candidatura</SelectItem>
                <SelectItem value="consulting">Outro</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[180px] resize-none rounded-none"
          placeholder="Digite sua mensagem"
        />
        {/* btn */}
        <Button text="Enviar Mensagem">Enviar Mensagem</Button>
      </div>
    </form>
  );
};

export default Form;
