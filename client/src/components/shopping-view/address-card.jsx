import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  const { t } = useTranslation();
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>Địa chỉ: {addressInfo?.address}</Label>
        <Label>Thành phố: {addressInfo?.city}</Label>
        <Label>Mã bưu điện: {addressInfo?.pincode}</Label>
        <Label>Số điện thoại: {addressInfo?.phone}</Label>
        <Label>Ghi chú: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>{t("Edit")}</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>{t("Delete")}</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
