"use client"
import { useState } from "react";
import { AddCollectionModal } from "@/components/authenticated/add-collection-modal";
import { Button } from "@/components/ui/button";

export function AddCollectionClientWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AddCollectionModal editMode={false} open={modalOpen} onClose={() => setModalOpen(false)} />
      <Button onClick={() => setModalOpen(true)}>Add Collection</Button>
    </>
  );
}
