import { cookies } from "next/headers";
import { isValidProposalAccessToken, PROPOSAL_AUTH_COOKIE } from "@/lib/proposal-auth";
import { createBurneysPdf } from "@/lib/burneys-pdf";
import { burneysProposal } from "@/lib/burneys-proposal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const token = (await cookies()).get(PROPOSAL_AUTH_COOKIE)?.value;
  if (!(await isValidProposalAccessToken(token))) {
    return Response.redirect(new URL("/voorstel/toegang?next=%2Fvoorstel%2Fburneys%2Fpdf", request.url));
  }
  return new Response(new Uint8Array(await createBurneysPdf()), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${burneysProposal.quoteNumber}.pdf"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
