import "./footer.styles.scss";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <h3
        style={{
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyrightIcon /> Copyright Justin Kim
      </h3>
    </div>
  );
};

export default Footer;
