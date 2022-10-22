import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const useQueries = (mobileMax = "768px", tabletMax = "1024px") => {
  let mobile = useMediaQuery(`(max-width: ${mobileMax})`);
  let tablet = useMediaQuery(`(max-width: ${tabletMax})`);
  let laptop = useMediaQuery(`(max-width: ${tabletMax})`);

  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isLaptop, setLaptop] = useState(false);

  useEffect(() => {
    mobile ? setMobile(true) : setMobile(false);
    tablet ? setTablet(true) : setTablet(false);
    laptop ? setLaptop(true) : setLaptop(false);
  }, [mobile, tablet]);

  return { isMobile, isTablet, isLaptop };
};

export default useQueries;
