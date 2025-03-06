import { useTranslation } from "react-i18next";

function UnauthPage() {
  const { t } = useTranslation();
  return <h1>{t("You don't have access to view this page")}</h1>;
}

export default UnauthPage;
