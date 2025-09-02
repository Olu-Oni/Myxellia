import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import dialogBG from "../assets/ModalBG.png";
import setting from "../assets/setting-4.svg";
import trend from "../assets/trend-up.svg";
import bars from "../assets/bars.svg";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "1em",
          padding: "0px",
          maxWidth: "438px",
          height: "560px",
        },
      }}
    >
      <DialogContent className="!p-0 flex flex-col !rounded-2xl">
        <div className="bg-[#0C2841] px-8 pt-8 min-h-[200px] bg-cover bg-center bg-no-repeat flex">
          <span
            style={{ backgroundImage: `url(${dialogBG})` }}
            className="w-full h-auto"
          ></span>
        </div>
        <div
          className="flex flex-col gap-6 px-10 py-5 pr-12"
          id="alert-dialog-description"
        >
          <div className="flex gap-6 ">
            <img src={setting} width={24} height={24}/>
            <span>
              <h5 className="text-base font-semibold text-black">
                Set up annual budgets by account category
              </h5>
              <p className="text-xs">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </span>
          </div>
          <div className="flex gap-6 ">
            <img src={trend} width={24} height={24}/>
            <span>
              <h5 className="text-base font-semibold text-black">
                Track actuals vs budget in real time
              </h5>
              <p className="text-xs">
                See how your community is performing against plan, month by month.
              </p>
            </span>
          </div>
          <div className="flex gap-6 ">
            <img src={bars} width={24} height={24}/>
            <span>
              <h5 className="text-base font-semibold text-black">
                Adjust figures and forecast with ease
              </h5>
              <p className="text-xs">
                Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.
              </p>
            </span>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <button
          className=" mx-auto mb-4 w-[344px] h-[46px]  bg-black rounded-full text-white"
          onClick={handleClose}
        >
          Create Budget
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
export type { ModalProps };
