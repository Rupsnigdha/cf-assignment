import { useDashboardSettingsStore } from "@/stores/dashboardSettingsStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus, Trash2, X } from "lucide-react";
import { Textarea } from "../ui/textarea";

export function DashboardSettings() {
  const { isDialogOpen, closeDialog } = useDashboardSettingsStore();
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="lg:max-w-screen-lg max-h-screen">
        <DialogHeader>
          <DialogTitle>Configure Deployment Settings</DialogTitle>
          <DialogDescription className="text-sm">
            Configure the settings of this deployment.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <span>Description</span>
            <Textarea
              placeholder="This is your current description..."
              className="h-16 max-h-16 resize-none"
            />
            <span>Tags</span>
            <div className="flex gap-1 flex-wrap">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/80 transition-colors flex gap-1 text-sm items-center cursor-pointer">
                prod
                <X height={20} />
              </div>
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded hover:bg-primary/80 transition-colors flex gap-1 text-sm items-center cursor-pointer">
                email
                <X height={20} />
              </div>
              <div className="bg-primary text-primary-foreground p-1 rounded hover:bg-primary/80 transition-colors flex gap-1 text-sm items-center cursor-pointer">
                <Plus height={20} />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div>
            <Button className="bg-destructive/90 text-white hover:bg-destructive/70 cursor-pointer">
              <Trash2 /> Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
