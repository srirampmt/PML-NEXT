import { redirect } from "next/navigation";

export default function BrouchersPage() {
	// Keep this legacy/typo route working by forwarding to the kiosk viewer.
	redirect("/brochure");
}

