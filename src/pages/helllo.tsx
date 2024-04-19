import { useBearStore } from '@/models';
import { Button } from '@components/ui/button';

export default function Hello() {
  const bear = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <div>bear : {bear}</div>
      <Button className="bg-red-200" onClick={increase}>
        Click me
      </Button>
      hello world
    </div>
  );
}
