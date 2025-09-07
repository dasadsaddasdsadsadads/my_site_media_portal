import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  focusColor?: string;
}

export default function SearchInput({ 
  placeholder, 
  value, 
  onChange, 
  className = "",
  focusColor = "ring-primary"
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`pl-10 pr-4 py-3 focus:${focusColor} border-border`}
        data-testid="input-search"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
    </div>
  );
}
