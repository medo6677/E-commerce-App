import { getPasswordStrength } from "../utils/passwordStrength";

interface Props {
  password: string;
}

export default function PasswordStrength({ password }: Props) {
  const strength = getPasswordStrength(password);

  return (
    <div className="flex items-center gap-2 pt-1">
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
          style={{ width: strength.width }}
        />
      </div>

      <span className="text-xs text-muted-foreground font-medium">
        {strength.label}
      </span>
    </div>
  );
}