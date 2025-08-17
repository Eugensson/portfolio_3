import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl">
      <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
      <p className="text-white/60">
        Leave your message below and I&apos;ll get back to you soon.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <Input type="text" placeholder="Firstname" autoComplete="off" />
        <Input type="text" placeholder="Lastname" autoComplete="off" />
        <Input type="email" placeholder="Email address" autoComplete="off" />
        <Input type="phone" placeholder="Phone number" autoComplete="off" />
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="est">Web Development</SelectItem>
            <SelectItem value="cst">Ui/UX Design</SelectItem>
            <SelectItem value="mst">Logo Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea
        className="h-30 resize-none"
        placeholder="Type your message here."
      />
      <Button type="button" size="md" className="max-w-40 cursor-pointer">
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
